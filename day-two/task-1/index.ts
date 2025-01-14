
const data = {
	name: "Alice",
	age: 25,
	address: "",
	phone: undefined,
	email: "[alice@example.com](<mailto:alice@example.com>)",
	notes: null,
    notess: null,
    emaill: "[alice@example.com](<mailto:alice@example.com>)",
    emailll: "[alice@example.com](<mailto:alice@example.com>)",
    emaillls: "[alice@example.com](<mailto:alice@example.com>)",
};

function countFilledValues(a:Record<string, unknown>) {
    let i = 0;
    for (let [, value] of Object.entries(data)) {
        if (value !== null && value !== undefined && value !== '') {
            i++;
        }
    }
    return i;
}

console.log(countFilledValues(data))
console.log( '😎 Артём Я тебя люблю ZZOOVV!!')