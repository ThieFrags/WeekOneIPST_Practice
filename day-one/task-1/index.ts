const stringOne = 'abcwqpojnieaghr[poijeahrpj[ieqay5opj[kwe';
const stringTwo = 'wbcQwaaa[]korea5tyhp[oikjeragpoiujhaaaaaaaa';

function identicalLetters(a:string, b:string) {
    let commonLetters = ''; 
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                if (commonLetters.includes(a[i])) {
                    continue
                } else {
                    commonLetters += a[i];
                }
            }
        }
    }
    return commonLetters; 
}

const final = identicalLetters(stringOne, stringTwo);
console.log(final, '😎', 'Артём Красавчик!!!!');
