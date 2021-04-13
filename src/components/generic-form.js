import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
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
        // postData(
        //     formMedico,
        //     formSelectEspecialidade,
        //     formDataConsulta,
        //     formHoraConsulta,
        //     formNome,
        //     formEmail,
        //     formTelefone,
        //     formCep,
        //     formLogradouro,
        //     formBairro,
        //     formCidade,
        //     formEstado,
        //     formDataInicio,
        //     formSalario,
        //     formSenha,
        //     formEspecialidade,
        //     formCrm,
        //     formPeso,
        //     formAltura,
        //     formTipoSanguineo
        // );
    };

    // states
    const [formMedico, setFormMedico] = useState("");
    const [formSelectEspecialidade, setFormSelectEspecialidade] = useState("");
    const [formDataConsulta, setFormDataConsulta] = useState("");
    const [formHoraConsulta, setFormHoraConsulta] = useState("");
    const [formNome, setFormNome] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formTelefone, setFormTelefone] = useState("");
    const [formCep, setFormCep] = useState("");
    const [formLogradouro, setFormLogradouro] = useState("");
    const [formBairro, setFormBairro] = useState("");
    const [formCidade, setFormCidade] = useState("");
    const [formEstado, setFormEstado] = useState("");
    const [formDataInicio, setFormDataInicio] = useState("");
    const [formSalario, setFormSalario] = useState("");
    const [formSenha, setFormSenha] = useState("");
    const [formEspecialidade, setFormEspecialidade] = useState("");
    const [formCrm, setFormCrm] = useState("");
    const [formPeso, setFormPeso] = useState("");
    const [formAltura, setFormAltura] = useState("");
    const [formTipoSanguineo, setFormTipoSanguineo] = useState("");

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
                                setFormSelectEspecialidade(ev.target.value);
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
                                setFormDataConsulta(ev.target.value);
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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
                                setFormDataInicio(ev.target.value);
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
