const name = "hemant"
const repoCount = 50

//console.log(name + repoCount  + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hemant-p-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-7, 5)
console.log(anotherString);

const newStringOne = "    hemant    "
console.log(newStringOne);
console.log(newString.trim()); // more info search - trim javascript mdn

const url = "http://hemant.com/justcoding%09patil"
console.log(url.replace('%09', '-'));

console.log(url.includes('hemant'));


console.log(gameName.split('-'));

//more info search in mdn








