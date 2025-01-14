
type SourceData = {
  title: string,
  year: number,
  author: string,
}

type TargetData = {
  title: string,
  year: number,
  author: string,
  preview: string,
  url: string,
}

const source: SourceData = {
  title: "Harry Potter",
  year: 1997,
  author: "J.K. Rowling",
};

function createBook(source: SourceData) {
  let {title, year, author} = source;
  const urlObj: Record<string, string> = {
  ...source,
  year: String(source.year),
  };
  let url = new URLSearchParams(urlObj)
  const targetData: TargetData = {
    title,
    year,
    author,
    preview: `Название: ${title},Автор: ${author},Год ${year}`,
    url: `www.someurl.com/preview?${url}}`,
  }
  return targetData;
}

console.log(createBook(source))
console.log('Лестницу я уже нашёл 😁')