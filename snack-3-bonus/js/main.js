//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = parseInt(prompt('Inserisci un numero compreso tra 0 e 5'));
const max = parseInt(prompt('Inserisci un numero compreso tra 0 e 5'));

function valoriCompresi(array, num1, num2){
    
    const newArray = [];
   
    for (let i=num1 - 1; i <= num2-1; i++) {
        
        newArray.push(array[i]);

    }

    return newArray;

}

const newArray = valoriCompresi(myArray, min, max);
console.log(newArray);
