const colors = ["yellow", "pink", "green", "white", "black"];
const comands = ["Start", "End"];
let index = 0;
let totalBits = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("body").style.backgroundColor = "blue";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "green";
    }, 500);
    document.getElementById("display").innerHTML = comands[0];
    document.getElementById("display").innerHTML += "<br>";

    setInterval(() => {
        document.querySelector("body").style.backgroundColor = colors[index]
        if(index < colors.length){
            index++;
        }else {
            index = 0;
        };
        if (index % 3 === 0 ){
            document.getElementById("display").innerHTML += "1";
        }else{
            document.getElementById("display").innerHTML += "0";
        }
        totalBits++;
        if (totalBits % 50 === 0){
            document.getElementById("display").innerHTML += "<br>"
        }
        if (totalBits > 4 * 50){
            totalBits = 0;
            document.getElementById("display").innerHTML += "";
        }
    }, 10);
});
