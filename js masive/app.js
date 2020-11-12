let numere = [2, 5];
console.log(numere);
numere.push(8);
numere.unshift(3);
console.log(numere);

for (let index = 0; index < numere.length; index++) {
    console.log(numere[index]);    
}

let suma = 0;
numere.forEach(numar => {
    suma = suma + numar;
});
console.log(suma);


console.clear();

let numbers = [];
for (let index = 1; index <= 10; index++) {
   numbers.push(index);  
}
console.log(numbers);
console.log(numbers.filter(element => element % 2 === 0));
console.log(numbers.map(element => element ** 2));
console.log(numbers.find(element => element === 8));