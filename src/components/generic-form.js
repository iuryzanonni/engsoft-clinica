import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { post, get } from "../api-front";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import React from "react";
import { defaultStyles } from "../styles";

const GenericForm = ({ type }) => {
    // type: "funcionario", "medico", "paciente"
    const style = defaultStyles();
    const [currentType, setCurrentType] = useState(type);

    const handleSendClick = () => {
        switch (currentType) {
            case "medico":
            case "funcionario":
                post("funcionario", {
                    bairro: formBairro,
                    cep: formCep,
                    cidade: formCidade,
                    email: formEmail,
                    estado: formEstado,
                    logradouro: formLogradouro,
                    nome: formNome,
                    telefone: formTelefone,
                    data_contrato: `${new Date().getFullYear()}-${
                        new Date().getMonth() + 1 < 10
                            ? "0" + (new Date().getMonth() + 1)
                            : new Date().getMonth() + 1
                    }-${
                        new Date().getDate() < 10
                            ? "0" + new Date().getDate()
                            : new Date().getDate()
                    }`,
                    salario: formSalario,
                    senha_hash: formSenha,
                    crm: formCrm,
                    especialidade: formEspecialidade,
                    isMedico: currentType === "medico" ? true : false,
                    codigo: 55,
                });
                break;
            case "paciente":
                break;
            case "endereco":
                post("endereco", {
                    bairro: formBairro,
                    cep: formCep,
                    cidade: formCidade,
                    estado: formEstado,
                    logradouro: formLogradouro,
                });
                break;
            case "consulta":
                break;
            default:
                break;
        }
    };

    const handleSetFormSelectEspecialidade = (value) => {
        setFormSelectEspecialidade(value);
        // busca no back as options
        setOptionsMedico([{ name: "teste", value: "yesye" }]);
    };

    const handleSetFormDataConsulta = (value) => {
        setFormDataConsulta(value);
        // busca no back as options
        setOptionsHour([{ name: "10:00", value: "10:00" }]);
    };

    // states
    const [formMedico, setFormMedico] = useState("");
    const [formSelectEspecialidade, setFormSelectEspecialidade] = useState("");
    const [formDataConsulta, setFormDataConsulta] = useState(new Date());
    const [formHoraConsulta, setFormHoraConsulta] = useState("");
    const [formNome, setFormNome] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formTelefone, setFormTelefone] = useState("");
    const [formCep, setFormCep] = useState("");
    const [formLogradouro, setFormLogradouro] = useState("");
    const [formBairro, setFormBairro] = useState("");
    const [formCidade, setFormCidade] = useState("");
    const [formEstado, setFormEstado] = useState("");
    const [formDataInicio, setFormDataInicio] = useState(new Date());
    const [formSalario, setFormSalario] = useState("");
    const [formSenha, setFormSenha] = useState("");
    const [formEspecialidade, setFormEspecialidade] = useState("");
    const [formCrm, setFormCrm] = useState("");
    const [formPeso, setFormPeso] = useState("");
    const [formAltura, setFormAltura] = useState("");
    const [formTipoSanguineo, setFormTipoSanguineo] = useState("");
    const [optionsEspecialidade, setOptionsEspecialidade] = useState([
        { name: "teste", value: "yesye" },
    ]);
    const [optionsMedico, setOptionsMedico] = useState([]);
    const [optionsHour, setOptionsHour] = useState([]);

    return (
        <>
            <div>
                <div>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setCurrentType("medico");
                        }}
                    >
                        Medico
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setCurrentType("funcionario");
                        }}
                    >
                        Funcionario
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setCurrentType("paciente");
                        }}
                    >
                        Paciente
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setCurrentType("endereco");
                        }}
                    >
                        Endereço
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setCurrentType("consulta");
                        }}
                    >
                        Consulta
                    </Button>
                </div>
                {["consulta"].includes(currentType) && (
                    <FormControl className={style.selectField}>
                        <InputLabel>Especialidade</InputLabel>
                        <Select
                            label="Especialidade"
                            id="demo-simple-select"
                            value={formSelectEspecialidade}
                            onChange={(ev) => {
                                handleSetFormSelectEspecialidade(
                                    ev.target.value
                                );
                            }}
                        >
                            {optionsEspecialidade.map((option) => (
                                <MenuItem id={option.name} value={option.value}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                {["consulta"].includes(currentType) && (
                    <FormControl className={style.selectField}>
                        <InputLabel>Médico</InputLabel>
                        <Select
                            label="Medico"
                            id="demo-simple-select"
                            value={formMedico}
                            onChange={(ev) => {
                                setFormMedico(ev.target.value);
                            }}
                        >
                            {optionsMedico.map((option) => (
                                <MenuItem id={option.name} value={option.value}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                {["consulta"].includes(currentType) && (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="outlined"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Data da Consulta"
                            value={formDataConsulta}
                            onChange={(ev) => {
                                handleSetFormDataConsulta(ev);
                            }}
                        />
                    </MuiPickersUtilsProvider>
                )}
                {["consulta"].includes(currentType) && (
                    <FormControl className={style.selectField}>
                        <InputLabel>Hora</InputLabel>
                        <Select
                            label="Hora"
                            id="demo-simple-select"
                            value={formHoraConsulta}
                            onChange={(ev) => {
                                setFormHoraConsulta(ev.target.value);
                            }}
                        >
                            {optionsHour.map((option) => (
                                <MenuItem id={option.name} value={option.value}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                {["funcionario", "medico", "paciente", "consulta"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        variant="outlined"
                        value={formNome}
                        onChange={(ev) => {
                            setFormNome(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "consulta"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={formEmail}
                        onChange={(ev) => {
                            setFormEmail(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "consulta"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Telefone"
                        variant="outlined"
                        value={formTelefone}
                        onChange={(ev) => {
                            setFormTelefone(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "endereco"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="CEP"
                        variant="outlined"
                        value={formCep}
                        onChange={(ev) => {
                            setFormCep(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "endereco"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Logradouro"
                        variant="outlined"
                        value={formLogradouro}
                        onChange={(ev) => {
                            setFormLogradouro(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "endereco"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Bairro"
                        variant="outlined"
                        value={formBairro}
                        onChange={(ev) => {
                            setFormBairro(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "endereco"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Cidade"
                        variant="outlined"
                        value={formCidade}
                        onChange={(ev) => {
                            setFormCidade(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico", "paciente", "endereco"].includes(
                    currentType
                ) && (
                    <TextField
                        id="outlined-basic"
                        label="Estado"
                        variant="outlined"
                        value={formEstado}
                        onChange={(ev) => {
                            setFormEstado(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico"].includes(currentType) && (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="outlined"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Data Inicio"
                            value={formDataInicio}
                            onChange={(ev) => {
                                setFormDataInicio(ev);
                            }}
                        />
                    </MuiPickersUtilsProvider>
                )}
                {["funcionario", "medico"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="Salário"
                        variant="outlined"
                        value={formSalario}
                        onChange={(ev) => {
                            setFormSalario(ev.target.value);
                        }}
                    />
                )}
                {["funcionario", "medico"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="Senha"
                        variant="outlined"
                        value={formSenha}
                        onChange={(ev) => {
                            setFormSenha(ev.target.value);
                        }}
                    />
                )}
                {["medico"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="Especialidade"
                        variant="outlined"
                        value={formEspecialidade}
                        onChange={(ev) => {
                            setFormEspecialidade(ev.target.value);
                        }}
                    />
                )}
                {["medico"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="CRM"
                        variant="outlined"
                        value={formCrm}
                        onChange={(ev) => {
                            setFormCrm(ev.target.value);
                        }}
                    />
                )}
                {["paciente"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="Peso"
                        variant="outlined"
                        value={formPeso}
                        onChange={(ev) => {
                            setFormPeso(ev.target.value);
                        }}
                    />
                )}
                {["paciente"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="Altura"
                        variant="outlined"
                        value={formAltura}
                        onChange={(ev) => {
                            setFormAltura(ev.target.value);
                        }}
                    />
                )}
                {["paciente"].includes(currentType) && (
                    <TextField
                        id="outlined-basic"
                        label="Tipo sanguíneo"
                        variant="outlined"
                        value={formTipoSanguineo}
                        onChange={(ev) => {
                            setFormTipoSanguineo(ev.target.value);
                        }}
                    />
                )}
            </div>
            <div>
                <Button variant="outlined" onClick={() => {}}>
                    Limpar
                </Button>
                <Button variant="outlined" onClick={handleSendClick}>
                    Enviar
                </Button>
            </div>
        </>
    );
};

export default GenericForm;
