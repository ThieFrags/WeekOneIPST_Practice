type Obj = {
  name: string,
  email: string,
  isActive: boolean,
}

const userData:Obj[] = [{
  name: ' Artem ',
  email: 'Char@mail.ru',
  isActive: true,
}, 
{
  name: 'Ivan',
  email: 'IvanChar@mail.ru',
  isActive: false,
},
{
  name: 'Toha',
  email: 'TohaIvan@mail.ru',
  isActive: true,
}]

async function cleanUserData(userData:Obj[]):Promise<Obj[]> {
  try {
    const userDataActive = userData.filter(active => active.isActive === true);
    const usersData = userDataActive.map(userData => ({
      ...userData,
      name:userData.name.trim().toLowerCase(),
      email:userData.email.toLowerCase(),
    }));

    if (Math.random() < 0.1) {
      throw new Error("Ошиботька <3, данные хуйня Мяу");
    }
    return usersData;
} catch (error) {
    console.log(error);
    return [];
  }
}

cleanUserData(userData).then ((data) => console.log(data));  


