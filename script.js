window.addEventListener("load", function () {
    NegyzetGeneralas();
    Kattintas();
   
});


let jatekos = 0;

function NegyzetGeneralas() {
    const DivELEM = document.getElementById("palya")
    
    let txt = "";
    for(let i = 0; i < 9; i++){
        txt += `<div class="negyzet"></div>`
    }
    DivELEM.innerHTML += txt
}


function Kattintas(){
    const Negyzet = document.getElementsByClassName("negyzet")

    for (let i = 0; i < Negyzet.length; i++) {
        Negyzet[i].addEventListener("click", function (event){
            event.target.style.color = "#505d5b";
            event.target.innerHTML = "X";
            jatekos = 1;
        });
      }
}









