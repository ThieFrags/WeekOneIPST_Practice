type GadgetObj = {
  id: string,
  name: string,
  price: string | undefined,
}

type UserWithGadget = {
  id: string,
  name: string,
  gadget: GadgetObj,
}

type UserWithGadgetOriginal = { 
  id: string,
  name: string,
  gadget: GadgetObj[],
}

const inputData: UserWithGadget[] = [
  {
    id: "1",
    name: "Khalid Kashmiri",
    gadget: { id: "101", name: "Phone", price: "1000" },
  },
  {
    id: "2",
    name: "Khidir Karawita",
    gadget: { id: "102", name: "Tablet", price: undefined },
  },
  {
    id: "1",
    name: "Khalid Kashmiri",
    gadget: { id: "103", name: "Laptop", price: "1500" },
  },
];

function aggregation(inputData:UserWithGadget[]):UserWithGadgetOriginal[] {
  let userWithGadgetOriginal:UserWithGadgetOriginal[] = [];
  inputData.forEach((userWithGadget) => {
    const find = userWithGadgetOriginal.find((data) => data.id === userWithGadget.id);
    if (find) {
      find.gadget.push(userWithGadget.gadget);
    } else {
      userWithGadgetOriginal.push({
      ...userWithGadget,
      gadget:[userWithGadget.gadget]});
    }
  })

  return userWithGadgetOriginal;
}

console.log(aggregation(inputData));
console.log(`Тот кто придмуал это задание, я того наоборот любил с добром и позитивом, всем кискам кис. 
Мозг вышел из чата. Я что пришёл на олимпиаду русский медвежёнок?`)