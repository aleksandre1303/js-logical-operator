/* Tasks */

/* 
  What's the result of OR?
  
  What is the code below going to output?
  
  
  */

// Solution //

alert(null || 2 || undefined);

alert(null || 2 || undefined); // 2

/* 
  What's the result of OR'ed alerts?
  
  What will the code below output?
  
  
  */

// Solution //

alert(alert(1) || 2 || alert(3));

alert(alert(1) || 2 || alert(3)); // first 1, then 2.

/* 
  What is the result of AND?
  
  What is this code going to show?
  
  */

// Solution //

alert(1 && null && 2);

alert(1 && null && 2); // null

/* 
  What is the result of AND'ed alerts?
  
  What will this code show?
  
  // alert( alert(1) && alert(2) );
  
  
  */

// Solution //

alert(alert(1) && alert(2)); // first 1, then undefined

/* 
  The result of OR AND OR
  
  What will the result be?
  
  // alert( null || 2 && 3 || 4 );
  
  
  */

// Solution //

alert(null || (2 && 3) || 4); // 3, because "&&" is higher than ||

/* 
  Check the range between
  
  Write an "if" condition to check that "age" is between 14 and 90 inclusively
  
  "inclusively" means that "age" can reach the edges 14 or 90.
  
  
  */

// Solution //

if (age >= 14 && age <= 90)
  if (!(age >= 14) && age <= 90) if (age < 14 || age > 90); // second variant

/* 
  A question about "if"
  
  Which of these "alerts" are going execute?
  
  what will the results of the expressions be inside "if"(...)?
  
  if (-1 || 0) alert( "first" );
  if (-1 && 0) alert( "Second" );
  if (null || -1 && 1) alert( "third" );
  
  // Solution //
  
  // Runs.
  // The result of -1 || 0 = -1, truthy
  
  if (-1 || 0) alert( "first" );
  
  // Doesn't run
  // -1 && 0 = 0, falsy
  
  if (-1 && 0) alert( "Second" );
  
  // Executes
  // Operator && has a higher precedence than ||
  // so -1 && 1 executes first, giving us the chain:
  // null || -1 && 1 -> null || 1 -> 1
  
  if (null || -1 && 1) alert( "third" );
*/

/* 
  let userName = prompt( "Who's there?", "");
  
  if (userName === "Admin") {
    let userPassword = prompt("Password?");
    
    if (userPassword === "TheMaster") {
      alert( "Welcome!" );
    } else if (userPassword === "" || userPassword === null) {
      alert( "Canceled" );
    } else {
      alert( "Wrong password" );
    }
  } else if (userName === "" || userName === null) {
    alert( "Canceled" );
  } else {
    alert( "I don't know you" );
  }
*/

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let userPassword = prompt("Password?");

  if (userPassword === "TheMaster") {
    alert("Welcome!");
  } else if (userPassword === "" || userPassword === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
