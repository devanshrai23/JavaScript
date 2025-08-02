const accountId = 144553;
let accountEmail = "devansh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;               // default value = undefined

// accountID = 2   // not allowed

accountEmail = "dev@gmail.com";
accountPassword = "12355";
accountCity = "Sagar";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

