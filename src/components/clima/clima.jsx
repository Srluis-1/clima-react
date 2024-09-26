import React from "react";
import Buscar from "../Buscar/Buscar";
import InfoPrincipal from "../InfoPrincipal/InfoPrincipal";
import InfoSecundaria from "../InfoSecundaria/InfoSecundaria";
import { useClima } from "../../hooks/useClima";
import styled from "styled-components";
import fundo from "./../../assets/iamgen/fundo.jpg";

export function Clima() {
    const { 
        cidade, setCidade, handleBusca, 
        temperatura, condicao, humidade, 
        velocidadeVento, iconeCondicao 
    } = useClima();

    return (
        <MainStyled className="container">
            <Buscar cidade={cidade} setCidade={setCidade} handleBusca={handleBusca} />
            <InfoPrincipal cidade={cidade} temperatura={temperatura} iconeCondicao={iconeCondicao} condicao={condicao} />
            <InfoSecundaria humidade={humidade} velocidadeVento={velocidadeVento} />
        </MainStyled>
    );
}

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
    margin: 150px auto;
`;




