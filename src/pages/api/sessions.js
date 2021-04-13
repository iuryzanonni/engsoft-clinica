import { withIronSession } from "next-iron-session";
import database from "../../database";

const VALID_EMAIL = "leonardo@commitjr.com";
const VALID_PASSWORD = "admin";

export default withIronSession(
    async (req, res) => {
        try {
            if (req.method === "POST") {
                const { email, password } = req.body;
                let loginResponse = await GetLogin(password, email);
                if (loginResponse.authentication) {
                    req.session.set("user", {
                        email,
                        isMedico: loginResponse.isMedico,
                    });
                    await req.session.save();
                    return res.status(201).send("🤩 🤩");
                }

                return res.status(403).send("Access Denied!🔑 🔑 ");
            }

            return res.status(404).send("🤪 🤪 🤪");
        } catch (ex) {
            console.error(ex);
            return res.status(500).send(`🤯 🤯 \n\n\n${ex}`);
        }
    },
    {
        cookieName: "MYSITECOOKIE",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false,
        },
        password: process.env.APPLICATION_SECRET,
    }
);

async function GetLogin(password, email) {
    let model = {
        codigo: "",
        email: "",
        authentication: false,
        isMedico: false,
    };
    let results;
    let selectClause =
        "funcionario.codigo, pessoa.email, if(funcionario.senha_hash = sha1('" +
        password +
        "'), TRUE, FALSE) as auth";
    let whereClause = "pessoa.email = '" + email + "'";

    try {
        results = await database("pessoa")
            .join("funcionario", "pessoa.codigo", "funcionario.codigo")
            .select(database.raw(selectClause))
            .whereRaw(whereClause);

        if (results[0]) {
            model.codigo = results[0].codigo;
            model.email = results[0].email;
            model.authentication = results[0].auth ? true : false;
        }

        results = await database("medico").where("codigo", model.codigo);
        if (model.authentication && results[0]) {
            model.isMedico = true;
        }
    } catch (error) {
        return { message: error.message };
    }

    return model;
}
