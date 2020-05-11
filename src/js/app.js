import findBy from "./findBy";

console.log("worked");

const arrForSearch = [
  { name: "маг", type: "character", description: "Персонаж, обладающий магическими способностями" },
  { name: "заклинание", type: "attack", description: "Атака магическим заклинанием" },
  { name: "урон", type: "help", description: "Страница описания элемента интерфейса" },
];

const finder = findBy("name", "урон");
console.log(arrForSearch.filter(finder));
