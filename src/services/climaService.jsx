export const buscarDadosDaCidade = async (cidade) => {
    const chaveDaApi = '9f5fbee34a4142be8cb171737242509';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;
    try {
        const resposta = await fetch(apiUrl)
        if (resposta.status !== 200) { return null }
        const dados = await resposta.json()
        return dados;
    } catch (error) {
        console.error('Erro ao Buscar dados:', error)
        return null
    }
}