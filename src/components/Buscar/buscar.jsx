import React from "react";
import lupa from "../../assets/iamgen/lupa.png"
import styled from "styled-components";


function Buscar({ cidade, setCidade, handleBusca }) {
    return (
        <BuscarStyled className="buscar">
            <input type="text"
                id="input-busca"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)} placeholder="Digite uma cidade"
            />
            <button className="btn-buscar" onClick={handleBusca}>
                <img  className="lupa" src={lupa} alt="" />
            </button>
        </BuscarStyled>

    )
}

const BuscarStyled = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     border: none;
     width: 500px;
     background:#abb1cc ;
     border-radius:20px;

    input{
    height: 35px;
    width: 300px;
    border-radius: 15px;
    border: solid 1px ;
    margin: 10px;
    text-align: center;
    font-size: 20px;
    }
    
    .btn-buscar{
    align-items: center;
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border:none;
    background-color:#3f5efb;   
    }

    .btn-buscar  img{
    width: 24px;
    height: 24px;
    }
`;
export default Buscar 