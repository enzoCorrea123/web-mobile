const h1 = document.getElementById('titulo');
const p = document.getElementById('paragrafo');
const corFundo = document.getElementById('corFundo');
const corTitulo = document.getElementById('corTitulo');
const corParagrafo = document.getElementById('corParagrafo');
const fonteTitulo = document.getElementById('fonteTitulo');
const fonteParagrafo = document.getElementById('fonteParagrafo');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const mudarTudo = document.getElementById('mudarTudo');

let fontes = ["Alice, serif","'Arvo', serif","'Bodoni Moda', serif","'Cinzel', serif","'Crimson Text', serif",
        "'Domine', serif","'Inconsolata', monospace","'Lato', sans-serif","'Montserrat', sans-serif",
        "'Oswald', sans-serif","'Poppins', sans-serif","'Sofia', cursive","'Tilt Prism', cursive",
        "'Ubuntu', sans-serif","'Ultra', serif"];

corFundo.addEventListener('click',()=>{
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    p1.innerHTML = `Cor de fundo atual: rgb(${rgb1},${rgb2},${rgb3})`;
});

corTitulo.addEventListener('click',()=>{
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);

    h1.style.color = `rgb(${rgb1},${rgb2},${rgb3})`;
    p2.innerHTML = `Cor de título atual: rgb(${rgb1},${rgb2},${rgb3})`;
});

corParagrafo.addEventListener('click',()=>{
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);

    p.style.color = `rgb(${rgb1},${rgb2},${rgb3})`;
    p3.innerHTML = `Cor de parágrafo atual: rgb(${rgb1},${rgb2},${rgb3})`;
});

fonteTitulo.addEventListener('click',()=>{
    let index = Math.floor(Math.random() * 15);
    h1.style.fontFamily = `${fontes[index]}`;
    p4.innerHTML = `Fonte do título: ${fontes[index]}`;
    
});

fonteParagrafo.addEventListener('click',()=>{
    let index = Math.floor(Math.random() * 15);
    p.style.fontFamily = `${fontes[index]}`;
    p5.innerHTML = `Fonte do parágrafo: ${fontes[index]}`;
    
});
mudarTudo.addEventListener('click',()=>{
    let coresFontes = [];
    for(let i = 0;i<9;i++){
        coresFontes.push(Math.floor(Math.random() * 256));
    }
    let fonte1 = fontes[Math.floor(Math.random() * 15)];
    let fonte2 = fontes[Math.floor(Math.random() * 15)];

    document.body.style.backgroundColor = `rgb(${coresFontes[0]},${coresFontes[1]},${coresFontes[2]})`
    p.style.color = `rgb(${coresFontes[3]},${coresFontes[4]},${coresFontes[5]})`
    h1.style.color = `rgb(${coresFontes[6]},${coresFontes[7]},${coresFontes[8]})`
    p.style.fontFamily = `${fonte2}`;
    h1.style.fontFamily = `${fonte1}`;

    p1.innerHTML = `Cor de fundo atual: rgb(${coresFontes[0]},${coresFontes[1]},${coresFontes[2]})`;
    p2.innerHTML = `Cor de título atual: rgb(${coresFontes[3]},${coresFontes[4]},${coresFontes[5]})`;
    p3.innerHTML = `Cor de parágrafo atual: rgb(${coresFontes[6]},${coresFontes[7]},${coresFontes[8]})`;
    p4.innerHTML = `Fonte do título: ${fonte1}`;
    p5.innerHTML = `Fonte do parágrafo: ${fonte2}`;
    
});