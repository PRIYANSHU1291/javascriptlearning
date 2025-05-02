const accountId = 144553
let accountEmail = "necromancer.796@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;
// accountId = 2 //not allowed
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "priyanshu.r.singh@gmail.com"
accountPassword = "7890"
accountCity = "bihar"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 