import GenericList from "../components/generic-list";
import { Button, Link } from "@material-ui/core";

const Funcionarios = (props) => {
    return (
        <>
            <Link href="/cadastro/funcionarios">
                <Button style={{ marginTop: "30px", border: "1px solid grey" }}>
                    Adicionar novo
                </Button>
            </Link>

            <GenericList type="funcionario" />
        </>
    );
};

export default Funcionarios;
