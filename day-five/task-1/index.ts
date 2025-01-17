function checkCorrect(inputData:string) {
  const arrayValues = ["Камень", "Ножницы", "Бумага"];
  const checkValue = arrayValues.find((word) => word === inputData)
  try {
    if (checkValue) {
      const indexComputer:number = Math.floor(Math.random() * 3);
      const indexUser:number = arrayValues.indexOf(inputData);
      const result:number = (indexUser - indexComputer + 3) % 3;
      const resultMap:string[] = [
        'Ничья',
        'МАШИНЫ ОТСАСАЛИ',
        'Я УМНЕЕ ТЕБЯ КОЖАНЫЙ МЕШОК, У МЕНЯ ПАМЯТИ 16ГБ, ХАХА'
      ];
      return {result: resultMap[result],
      userInput: checkValue,
      computerInput: arrayValues[indexComputer],}
    } else {
      throw new Error("Ошибка: Некорректно введённые данные");
    }
  } catch (error: any){
    return {error: error.message};
  }
}

const inputData:string = String(prompt("Введите: Камень, Ножницы или Бумага"));
console.log(checkCorrect(inputData))