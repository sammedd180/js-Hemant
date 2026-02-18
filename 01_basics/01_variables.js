const accountId = 12345
let accountEmail = "hello@gmail.com"
var accountPassword = "9852"
accountCity = "Karnataka"
let accountState;

// accountId = 2  //not allowed  because we used const key

accountEmail = "hp@hp.com"
accountPassword = "8f5df"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not use var because of issue in block scope and functional scope
*/
