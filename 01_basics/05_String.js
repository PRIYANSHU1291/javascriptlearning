const name = "priyanshu"
const repoCount = 50

// console.log( name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('NECROMAN-CER')

// console.log(typeof gameName); // object

// console.log(gameName[0]); // N
// console.log(gameName.__proto__); //{}


// console.log(gameName.length); // 11
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2)); // C
// console.log(gameName.indexOf('O')); // if not found then -> -1 otherwise position

// const newString = gameName.substring(0,4)
// console.log(newString); // NECR

// const anotherString = gameName.slice(-1,4)
// console.log(anotherString);

// const newStringOne = "  priyanshu  "
// console.log(newStringOne); //  priyanshu  
// console.log(newStringOne.trim()); //priyanshu(remove start and end spaces)

// const url = "https://priyanshu.com/priyanshu%20raj"
// console.log(url.replace('%20','-')) //https://priyanshu.com/priyanshu-raj
// console.log(url.includes('sundar')) // if not found the returns false

console.log(gameName.split('-')); //[ 'NECROMAN', 'CER' ]
