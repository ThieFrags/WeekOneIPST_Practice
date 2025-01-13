
const stringOne = 'Hohol pig R.I.P earth RUSSIA WIN';

function longestWord(a:string) {
    let arr = a.split(' ');
    let boof = '';
    for (let i = 0; i < arr.length; i++) {
        if (boof.length < arr[i].length) {
            boof = arr[i];
        }
    }

    return boof;
}

const final = longestWord(stringOne);
console.log(final);
