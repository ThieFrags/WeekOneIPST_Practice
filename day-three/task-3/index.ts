type SourceData = {
    id: string,
    name: string,
    phone: string,
  }

async function fakeAPI(delay = 2000):Promise<SourceData[]> {

  const source:SourceData = {
    id: 'id1',
    name: 'Artem',
    phone: '+798888888',
  }

  const source2:SourceData = {
    id: 'id2',
    name: 'Pepega',
    phone: '+792343248',
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([source, source2]);
    }, delay);
  });
}

fakeAPI().then ((data) => console.log(data))