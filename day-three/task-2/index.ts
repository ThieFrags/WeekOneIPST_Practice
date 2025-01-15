async function makeRequest(url:string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let json = await response.json();
        return json;
      } else {
        throw new Error('Error: Ошибка');
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  
  makeRequest('https://catfact.ninja/fact').then((data) => console.log(data));