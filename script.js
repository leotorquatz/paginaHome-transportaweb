/* API DO CHATGPT


Função para buscar dados da API de clima local
async function getWeather() {
    const apiKey = 'SUA_API_KEY'; // Substitua pela sua chave da API
    const city = 'Sao Paulo'; // Nome da cidade ou use geolocalização dinâmica
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Temperatura
        const temperature = data.main.temp;
        document.getElementById('temperature').textContent = `${temperature.toFixed(1)} °C`;

        // Ícone do clima
        const weatherIcon = data.weather[0].icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        document.getElementById('weatherIcon').src = weatherIconUrl;
        document.getElementById('weatherIcon').alt = data.weather[0].description;

    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

// Chama a função para obter o clima ao carregar a página
window.onload = getWeather;
**/

//depois arrumar para receber os dados que virão da api
function populateData() {
    document.getElementById('motoristas').textContent = '10';
    document.getElementById('viagensAtivas').textContent = '5';
    document.getElementById('viagensConcluidas').textContent = '15';
    document.getElementById('rendaDiaria').textContent = 'R$ 500,00';
}


window.onload = function() {
    getWeather();
    populateData();
};
