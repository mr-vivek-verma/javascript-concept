const accountId = 12345
let accountEmail = "vivek@google.com"
var accountPassword = "123456789"
accountCity = "Lucknow"   //Here we can declare the variable like this way but this is not a good practice (don't use)
let accountState; //In JavaScript if we only declare the variable and not giving any value then it will give undefined.


accountEmail = "rahul@microsoft.com"
accountPassword = 987654321
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



//Note :

/*

Prefer not to use var keyword beacause of issue in block scope and functional scope

keyword	           const	let	  var
global scope	    no	     no	  yes
function scope	    yes	    yes	  yes
block scope	        yes	    yes	  no
can be reassigned	no	    yes	  yes

*/