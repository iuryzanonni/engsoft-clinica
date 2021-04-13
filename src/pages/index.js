import { makeStyles, Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { defaultStyles } from "../styles";

const Item = ({ item, index, style }) => (
    <>
        <section className={style.fastAnimation}>
            <Paper className={style.background} elevation={24}>
                <Typography
                    className={`${style.title} ${style.titleDesc} ${style.fadeLeftAnimation}`}
                    variant="h1"
                >
                    {item.first}
                </Typography>
                <Typography
                    className={`${style.subtitle} ${style.subtitleDesc} ${style.fadeRightAnimation}`}
                    variant="h1"
                >
                    {item.second}
                </Typography>
                <Typography
                    className={`${style.description} ${style.fadeLeftAnimation}`}
                    variant="h2"
                >
                    {item.description}
                </Typography>
                <Image
                    className={style.image}
                    src={`/assets/bg${index}.jpg`}
                    layout="fill"
                />
            </Paper>
        </section>
    </>
);

const Home = () => {
    const style = defaultStyles();

    const texts = [
        {
            first: "Trazemos mais que consultas,",
            second: "proporcionamos experiência.",
            description:
                "A © DisneyMed é uma clínica médica especializada em Check-ups de Saúde para todo tipo de paciente. Na DisneyMed, você recebe cuidado de especialistas de todas as áreas que precisa, em um único lugar. Agende várias especialidades em um só dia e deixe sua saúde nas mãos de um time inteiro que está preparado para te ajudar.",
        },
        {
            first: "Check-up",
            second: "com médicos conceituados.",
            description:
                "Selecionamos com muito cuidado os profissionais que cuidarão de sua saúde. Entendemos que o primeiro passo para um excelente tratamento é um time forte e unido, que realmente se interessa pela saúde dos nossos pacientes.",
        },
        {
            first: "E com muito conforto",
            second: "e excelente localização",
            description:
                "A © DisneyMed está localizada próxima da Região Hospitalar de Belo Horizonte, em rua de fácil acesso por transportes públicos e também com diversos estacionamentos no entorno. Contamos com instalações pensadas para te oferecer conforto e tranquilidade nos momentos que você mais precisa.",
        },
    ];

    return (
        <>
            <section className={style.fastAnimation}>
                <Paper className={style.background} elevation={24}>
                    <Typography
                        className={`${style.title} ${style.fadeLeftAnimation}`}
                        style={{ color: "#222", opacity: 1 }}
                        variant="h1"
                    >
                        disney
                    </Typography>
                    <Typography
                        className={`${style.subtitle} ${style.fadeRightAnimation}`}
                        style={{ color: "#f66", opacity: 1 }}
                        variant="h1"
                    >
                        MED
                    </Typography>
                    <Image src="/assets/bg.jpg" layout="fill" />
                </Paper>
            </section>
            {texts.map((item, index) => (
                <Item key={index} item={item} index={index + 2} style={style} />
            ))}
        </>
    );
};

export default Home;
