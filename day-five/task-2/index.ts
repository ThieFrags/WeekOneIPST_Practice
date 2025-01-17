

function atm (sum:number) {
  const arrayValues = [100, 50, 10, 5, 2, 1];
  let result:{[key:number]: number} = {};
  arrayValues.forEach((banknote) => {
    result = {
      [banknote]: Math.floor(sum / banknote),
      ...result,
    }
    sum %= banknote;
  });
  return result;
}

console.log(atm(1426));