console.log ("Welcome to the password validator tool!")

let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Please enter a password of at least 10 characters with at least one special character ", function(answer) {
    if (answer.length >= 10 && spChars.test(answer) == true){
    console.log("valid password")
     } else {
        console.log("Try again")
     }
 })
  
    
  
                                                                  
                                                                      
 
