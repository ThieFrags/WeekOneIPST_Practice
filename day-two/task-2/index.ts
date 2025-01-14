type Contact = {
  phone: string,
  email: string, 
}

type Address = {
  city: string,
  zip: string,
}

type SourceData = {
  user_id: string,
  full_name: string,
  contact: Contact,
  address: Address,
  is_active: boolean,
}

type TargetData = {
  id: string,
  name: string,
  phone: string,
  email: string,
  location: string,
  status: string,
}

const source: SourceData = {
user_id: "123",
full_name: "John Doe",
contact: {
  phone: "+123456789",
  email: "john.doe@example.com",
},
address: {
  city: "New York",
  zip: "10001",
},
is_active: true,
};

function dataConversion(source:SourceData) {
  let {user_id: id, full_name: name, contact:{phone}, contact:{email}, address:{city}, address:{zip}, is_active: status} = source;

  const target: TargetData = {
      id,
      name,
      phone,
      email: ` ${email}(<mailto:${email}>)`,
      location: `${city}, ${zip}`,
      status: status ? 'active' : 'deactivated',
  }

  return target;
}

console.log(dataConversion(source))
console.log('Осёу что ты тут делаешь? Спать иди 😎')