import React from "react";
import styled from "styled-components";

export default function InfoSecundaria({ humidade, velocidadeVento }) {
    return (
        <InfoSecundariaStyled>
            <div className="humidade">
                <span>Humidade:</span>
                <span id="humidade">{humidade}</span>
            </div>

            <div className="velocidadeVento">
                <span>Velocidade do Vento:</span>
                <span id="velocidade-do-vento">{velocidadeVento}</span>
            </div>
        </InfoSecundariaStyled>
    )
}

const InfoSecundariaStyled = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 10px auto;

    .humidade, .velocidadeVento {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span {
        font-size: 18px;
        color: #333;
        margin: 5px 0;
    }

    #humidade, #velocidade-do-vento {
        font-size: 24px;
        font-weight: bold;
        color: #00796b;
    }
`;