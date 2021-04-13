import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { get, post } from "../api-front";

const GenericList = ({ type }) => {
    const [tableRows, setTableRows] = useState([]);

    const parseRows = (rows, type) => {
        console.log(rows);
        return rows.map((row) => {
            return {
                nome: row.nome ? row.nome : "",
                email: row.email ? row.email : "",
                telefone: row.telefone ? row.telefone : "",
                cep: row.cep ? row.cep : "",
                logradouro: row.logradouro ? row.logradouro : "",
                bairro: row.bairro ? row.bairro : "",
                cidade: row.cidade ? row.cidade : "",
                estado: row.estado ? row.estado : "",
                dataInicio: row.data_contrato ? row.data_contrato : "",
                salario: row.salario ? row.salario : "",
                id: row.codigo ? row.codigo : "",
                crm: row.crm ? row.crm : "",
                especialidade: row.especialidade ? row.especialidade : "",
                peso: row.peso ? row.peso : "",
                altura: row.altura ? row.altura : "",
                tipoSanguineo: row.tipo_sanguineo ? row.tipo_sanguineo : "",
                medico: row.crm ? row.crm : "",
                dataConsulta: row.crm ? row.crm : "",
                hora: row.crm ? row.crm : "",
            };
        });
    };

    useEffect(() => {
        get(type).then((resp) =>
            resp ? setTableRows(parseRows(resp, type)) : null
        );
    }, []);

    let columns = [];
    switch (type) {
        case "funcionario":
            columns = [
                { field: "nome", headerName: "Nome", flex: 1 },
                { field: "email", headerName: "Email", flex: 1 },
                { field: "telefone", headerName: "Telefone", flex: 1 },
                { field: "cep", headerName: "CEP", flex: 1 },
                { field: "logradouro", headerName: "Logradouro", flex: 1 },
                { field: "bairro", headerName: "Bairro", flex: 1 },
                { field: "cidade", headerName: "Cidade", flex: 1 },
                { field: "estado", headerName: "Estado", flex: 1 },
                { field: "dataInicio", headerName: "Data Inicio", flex: 1 },
                { field: "salario", headerName: "Salario", flex: 1 },
                { field: "crm", headerName: "CRM", flex: 1 },
                {
                    field: "especialidade",
                    headerName: "Especialidade",
                    flex: 1,
                },
            ];
            break;
        case "paciente":
            columns = [
                { field: "nome", headerName: "Nome", flex: 1 },
                { field: "email", headerName: "Email", flex: 1 },
                { field: "telefone", headerName: "Telefone", flex: 1 },
                { field: "cep", headerName: "CEP", flex: 1 },
                { field: "logradouro", headerName: "Logradouro", flex: 1 },
                { field: "bairro", headerName: "Bairro", flex: 1 },
                { field: "cidade", headerName: "Cidade", flex: 1 },
                { field: "estado", headerName: "Estado", flex: 1 },
                { field: "peso", headerName: "Peso", flex: 1 },
                { field: "altura", headerName: "Altura", flex: 1 },
                {
                    field: "tipoSanguineo",
                    headerName: "Tipo Sanguíneo",
                    flex: 1,
                },
            ];
            break;
        case "endereco":
            columns = [
                { field: "cep", headerName: "CEP", flex: 1 },
                { field: "logradouro", headerName: "Logradouro", flex: 1 },
                { field: "bairro", headerName: "Bairro", flex: 1 },
                { field: "cidade", headerName: "Cidade", flex: 1 },
                { field: "estado", headerName: "Estado", flex: 1 },
            ];
            break;
        case "consulta":
        case "consultaMedico":
            columns = [
                {
                    field: "especialidade",
                    headerName: "Especialidade",
                    flex: 1,
                },
                { field: "medico", headerName: "Médico", flex: 1 },
                { field: "dataConsulta", headerName: "Bairro", flex: 1 },
                { field: "hora", headerName: "Cidade", flex: 1 },
                { field: "nome", headerName: "Nome", flex: 1 },
                { field: "Email", headerName: "Email", flex: 1 },
                { field: "telefone", headerName: "Telefone", flex: 1 },
            ];
            break;
    }

    return (
        <>
            <h2>{type ? type.toUpperCase() : ""}</h2>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid rows={tableRows} columns={columns} pageSize={5} />
            </div>
        </>
    );
};

export default GenericList;