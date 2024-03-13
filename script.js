window.addEventListener("load", function () {
    elsoFunkcio();
   
});

function elsoFunkcio() {
    const DivELEM = document.getElementById("palya")
    
    let txt = "";
    for(let i = 0; i < 9; i++){
        txt += `<div class="negyzet"><p class="alak"></p></div>`
    }
    DivELEM.innerHTML += txt
}








