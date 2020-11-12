console.log("HELLO WORLD!");
let x = 4;
console.log(x);
x = x + 2;
console.log(x);
/*
Instructiuni de decizie
*/

let nota = 6;
if(nota === 10 ){
    console.log("bravo ura");
}  else if(nota < 10 && nota >= 5){
    console.log("inveti destul de bine");
} else 
{
    console.log("inveti rau");
}

for (let cifra = 0 ; cifra < 10 ; cifra++) {
    console.log(cifra);
    
}

let cifra = 0 ;
while ( cifra < 10){
    console.log(cifra);
    cifra++;
}

cifra = 0 ;
do{
    console.log(cifra);
    cifra++;
}while ( cifra < 10);

console.log("numere divizibile cu 2 sau cu 5 din intervalul 100-200");
for(let numar = 100; numar <= 200; numar++){
    if(numar % 2 === 0 || numar % 5 === 0){
        console.log(numar);    
    }
}

console.log("Numere negative din intervalul -1 -50");
for(let numar = -1; numar >= -49; numar--){
    console.log(numar); 
}
