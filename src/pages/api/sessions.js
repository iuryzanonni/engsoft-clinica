import { withIronSession } from "next-iron-session";

const VALID_EMAIL = "leonardo@commitjr.com";
const VALID_PASSWORD = "admin";

export default withIronSession(
    async (req, res) => {
        try {
            if (req.method === "POST") {
                const { email, password } = req.body;
                console.log(email)
                console.log(password)
                if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                    req.session.set("user", { email });
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
            secure: process.env.NODE_ENV === "production" ? true : false
        },
        password: process.env.APPLICATION_SECRET
    }
);