import database from "../../../database";

async function GetAgenda(request, response) {
    let results;
    try {
        results = await database
            .select()
            .from("agenda")
            .join("medico", "agenda.codigomedico", "medico.codigo")
            .join("pessoa", "pessoa.codigo", "medico.codigo");
        return response.send(results);
    } catch (error) {
        return response.json({ message: error.message }).send(500);
    }
}

export default GetAgenda;
