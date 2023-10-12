async function buscaTempo(cidade){
    const info = document.getElementById('info');
    try{
        const api = await fetch(`http://api.weatherapi.com/v1/current.json?key=20cf18e27c5f483ab21231438231107&q=${cidade.value}`);
        const tempo = await api.json();
        const api2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=20cf18e27c5f483ab21231438231107&q=${cidade.value}days=1&aqi=no&alerts=no`);
        const futurosTempos = await api2.json();
        if(tempo.erro){
            info.innerHTML = "<p>Cidade não existe</p>"
            throw Error('Cidade não existe');
        }else{
            console.log(tempo);
        }
        if(futurosTempos.erro){
            throw Error('Cidade futura não existe');

        }else{
            console.log(futurosTempos);
        }
        info.innerHTML = `<p class="font-bold"><i class="fa-solid fa-temperature-quarter"></i> Temperatura:</p>
            <p>Hoje: ${tempo.current.temp_c}°C | Amanhã: ${futurosTempos.current.temp_c}°C
            <p class="font-bold"><i class="fa-solid fa-cloud"></i> Sensação térmica:</p>
            <p>Hoje: ${tempo.current.feelslike_c}°C | Amanhã: ${futurosTempos.current.feelslike_c}°C
            <p class="font-bold"><i class="fa-solid fa-droplet"></i> Umidade:</p>
            <p>Hoje: ${tempo.current.humidity}% | Amanhã:  ${futurosTempos.current.humidity}%
            <p class="font-bold"><i class="fa-solid fa-wind"></i> Velocidade do vento:</p>
            <p>Hoje: ${tempo.current.vis_km}kph | Amanhã: ${futurosTempos.current.vis_km}kph</p>`
    }catch(e){
        console.log("Erro: ",e);
        info.innerHTML = "Cidade inválida";
    }
}
const cidade = document.getElementById('cidade');
const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    buscaTempo(cidade);
})