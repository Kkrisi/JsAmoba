window.addEventListener("load", function () {
    NegyzetGeneralas();
    Kattintas();
    JatekVege();
   
});


let jatekos = 0;
let lepesek = 0;
const Negyzet = document.getElementsByClassName("negyzet")




function NegyzetGeneralas() {
    const DivELEM = document.getElementById("palya")

    let txt = "";
    for(let i = 0; i < 9; i++){
        txt += `<div class="negyzet"></div>`
    }
    DivELEM.innerHTML += txt
}





function Kattintas(){
    for (let i = 0; i < Negyzet.length; i++) {
        Negyzet[i].addEventListener("click", function (event){
            if (Negyzet[i].textContent.length === 1){
                console.log("Ez már foglalt!")
            } else if(jatekos === 0){
                event.target.style.color = "#505d5b";
                event.target.innerHTML = "X";
                jatekos = 1;
                lepesek ++;
            } else {
                event.target.style.color =  "#ffffff";
                event.target.innerHTML = "O";
                jatekos = 0;
                lepesek ++;
            }
            console.log("jatekos, lepesek: " + jatekos + "   " + lepesek);
            if(JatekVege()){};
        });
      }
}




function JatekVege(){
    if (
        (Negyzet[0].textContent === "X" && Negyzet[1].textContent === "X" && Negyzet[2].textContent === "X") ||
        (Negyzet[3].textContent === "X" && Negyzet[4].textContent === "X" && Negyzet[5].textContent === "X") ||
        (Negyzet[6].textContent === "X" && Negyzet[7].textContent === "X" && Negyzet[8].textContent === "X") ||
        (Negyzet[0].textContent === "X" && Negyzet[3].textContent === "X" && Negyzet[6].textContent === "X") ||
        (Negyzet[1].textContent === "X" && Negyzet[4].textContent === "X" && Negyzet[7].textContent === "X") ||
        (Negyzet[2].textContent === "X" && Negyzet[5].textContent === "X" && Negyzet[8].textContent === "X") ||
        (Negyzet[0].textContent === "X" && Negyzet[4].textContent === "X" && Negyzet[8].textContent === "X") ||
        (Negyzet[2].textContent === "X" && Negyzet[4].textContent === "X" && Negyzet[6].textContent === "X")
    ) {
        alert("Nyertél!");
        return true;
    } else if (
        (Negyzet[0].textContent === "O" && Negyzet[1].textContent === "O" && Negyzet[2].textContent === "O") ||
        (Negyzet[3].textContent === "O" && Negyzet[4].textContent === "O" && Negyzet[5].textContent === "O") ||
        (Negyzet[6].textContent === "O" && Negyzet[7].textContent === "O" && Negyzet[8].textContent === "O") ||
        (Negyzet[0].textContent === "O" && Negyzet[3].textContent === "O" && Negyzet[6].textContent === "O") ||
        (Negyzet[1].textContent === "O" && Negyzet[4].textContent === "O" && Negyzet[7].textContent === "O") ||
        (Negyzet[2].textContent === "O" && Negyzet[5].textContent === "O" && Negyzet[8].textContent === "O") ||
        (Negyzet[0].textContent === "O" && Negyzet[4].textContent === "O" && Negyzet[8].textContent === "O") ||
        (Negyzet[2].textContent === "O" && Negyzet[4].textContent === "O" && Negyzet[6].textContent === "O")
    ) {
        alert("Gép nyert!");
        return true;
    }
    // Döntetlen
    else if (lepesek === 9) {
        alert("Döntetlen!");
        return true;
    }
    // Még nincs vége a játéknak
    else {
        return false;
    }
}






