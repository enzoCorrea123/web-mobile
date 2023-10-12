const element = document.getElementById("cont");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");

let cont = 0;
element.innerHTML = cont

button1.addEventListener("click",()=>{
    element.innerHTML = " ";
    cont--;
    element.innerHTML += cont;
});
button2.addEventListener("click",()=>{
    element.innerHTML = " ";
    cont++;
    element.innerHTML += cont;
});
