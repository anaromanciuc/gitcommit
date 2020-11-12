let x=1;
let y=4;
let z=0;
console.log(x+2*y-z);
console.log(x*z/y+1);
x=1;
y=0;
z=4;
console.log(x+2*y-z);
console.log(x*z/y+1);
x=0;
y=0;
z=0;
console.log(x+2*y-z);
console.log(x*z/y+1);
x=10;
y=5;
z=2;
console.log(x+2*y-z);
console.log(x*z/y+1);

let a=parseInt(prompt("Introduceti numarul lunii"));
let luna = [
    "ianuarie", "februarie", "martie",
    "aprilie","mai","iuni","iulie",
    "august","septembrie","octombrie",
    "noiembrie","decembrie"];
let m='';
switch(a){
    case 1:
        m='ianuarie';
        break;
    case 2:
        m='februarie';
        break;
    case 3:
        m='martie';
        break;
    case 4: 
        m='aprilie';
        break;
    case 5:
        m='mai';
        break;
    case 6:
        m='iunie';
        break;
    case 7:
        m='iulie';
        break;
    case 8:
        m='august';
        break;
    case 9:
        m='septembrie';
        break;
    case 10:
        m='octombrie';
        break;
    case 11:
        m='noiembrie';
        break;
    case 12:
        m='decembrie';
        break;
    default:
        m='Aceasta luna nu exista'
        break;
}
document.write( m )




