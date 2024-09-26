import { useState } from "react";
import { buscarDadosDaCidade } from "../services/climaService";

export function useClima() {
    const [cidade, setCidade] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [condicao, setCondicao] = useState('');
    const [humidade, setHumidade] = useState('');
    const [velocidadeVento, setVelocidadeVento] = useState('');
    const [iconeCondicao, setIconeCondicao] = useState('https://cdn.weatherapi.com/weather/64x64/day/116.png');
    
    
    const handleBusca = async () => {
        if (!cidade) return;

        const dados = await buscarDadosDaCidade(cidade);

        console.log(dados);

        if (dados && dados.current) {
            preencherDadosNaTela(dados, cidade);
        } else {
            console.error("Dados inválidos retornados pela API");

            preencherDadosNaTela({
                current: {
                    temp_c: "N/A",
                    condition: { text: "N/A", icon: "" },
                    humidity: "N/A",
                    wind_kph: "N/A"
                }
            }, cidade);
        }
    }

    function preencherDadosNaTela(dados, cidade) {
        const temperatura = dados.current?.temp_c || "N/A";
        const condicao = dados.current?.condition?.text || "N/A";
        const humidade = dados.current?.humidity || "N/A";
        const velocidadeDoVento = dados.current?.wind_kph || "N/A";
        const iconeCondicao = dados.current?.condition?.icon || "";

        setCidade(cidade);
        setTemperatura(`${temperatura} ºC`);
        setCondicao(condicao);
        setHumidade(`${humidade}%`);
        setVelocidadeVento(`${velocidadeDoVento} km/h`);
        setIconeCondicao(iconeCondicao);
    }

    return {
        cidade,
        setCidade,
        temperatura,
        condicao,
        humidade,
        velocidadeVento,
        iconeCondicao,
        handleBusca
    };
}