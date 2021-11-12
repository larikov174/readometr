export const countWords = (index, text) => {
  localStorage.user = JSON.stringify({name: "David"});
  let user = JSON.parse( localStorage.user );
  let obj = Object.keys(localStorage)
  console.log(obj);
  // localStorage.setItem('newItem', JSON.stringify({name: "John"}))
  const cut = text.slice(0, index).replace(/\.?,?:?-?;?/g, "");
  const regExp = /([а-я]+|[0-9]+|[a-z]+)\s/gi;
  if (cut.match(regExp) !== null) {
    return cut.match(regExp).length + 1;
  } else {
    return 1;
  }
};
