const list = document.querySelector("#categories");
const childrenList = [...list.children];

console.log(`Number of categories: ${childrenList.length} `);

childrenList.forEach((item) => {
  const titelEL = item.querySelector("h2");
  const listInLi = item.querySelector("ul");
  const elementsList = listInLi.children;

  console.log(`Category: ${titelEL.textContent}
Elements: ${elementsList.length}`);
});
