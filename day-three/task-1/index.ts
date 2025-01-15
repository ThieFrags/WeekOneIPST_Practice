function delayPromise(delay:number, message:string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(message), delay)
    })
  }
  
  delayPromise(2000, 'УРА').then((final) => console.log(final));
  