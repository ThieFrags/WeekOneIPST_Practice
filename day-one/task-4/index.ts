
const stringOne = 'ZZZZZOOOOOOVVVVVRUSS';

function runLengthEncoding (arr:string) {
    let letter = '';
    let numbers = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            numbers++;
        } else {
            letter += arr[i] + numbers;
            numbers = 1; 
        }
    }
    return letter;
}

const final = runLengthEncoding(stringOne);
console.log(final);

 function runLengthDecoding (arr:string) {
    let letter = '';
    for (let i = 0; i < arr.length; i+=2) {
        for (let j = 0; j < Number(arr[i + 1]); j++) {
            letter += arr[i];
        }
    }
    return letter
 }

const final2 = runLengthDecoding(final);
console.log(final2);