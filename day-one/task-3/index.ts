
const stringOne = 'Hohol pig R.I.P earth RUSSIA WIN';
const index = 'qwe';

function find(ind:string, arr:string) {
    for (let i = 0; i < arr.length - ind.length; i++) {
        let bool = true;
        for (let j = 0; j < ind.length; j++) {
                if (arr[i + j] !== ind[j])
                bool = false;
                break;
        }
        if (bool) {
        return i;
    }
    }
    return -1;
}


const final = find(index, stringOne);
console.log(final, '😎', 'Артём Красавчик!!!!');
