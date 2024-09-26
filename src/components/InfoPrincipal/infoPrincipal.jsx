import React from "react";
import styled from "styled-components";

export default function InfoPrincipal ({cidae, temperatura, iconeCondicao, condicao}){
    return(
        <InfoPrincipalStyled className="infoPrincipal">
            <h1 id="cidade">{cidae || 'Use a lupa para var o clima na cidade'}</h1>
            <p className="temperatura" id="temperatura">{temperatura}</p>
            <img id="icone-condicao" src={iconeCondicao} alt="icone condição do clima"/>
            <p className="condicao" id="condicao">{condicao}</p>
        </InfoPrincipalStyled>
    )
}

const InfoPrincipalStyled = styled.div`
    text-align: centar;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 20px auto;

    h1 {
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
    }

    .temperatura {
        font-size: 48px;
        color: #ff6347; /* Cor vermelha para destacar a temperatura */
        margin: 10px 0;
    }

    #icone-condicao {
        width: 64px;
        height: 64px;
        margin: 10px 0;
    }

    .condicao {
        font-size: 20px;
        color: #666;
    }
`


