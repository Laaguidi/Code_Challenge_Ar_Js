// Create a function that takes an integer as an argument and returns
// "even for even numbers or "odd" for odd numbers

/*
function even_or_odd(number){
    if(value % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}
*/
//Exemple 2:
function even_or_odd(number){
    const result = (number % 2  == 0) ? "even" : "odd";
    return result;
}

console.log(even_or_odd(11));

//Exemple 2 :
// program to check if the number is even or odd
// take input from the user

//const number = prompt("Enter a number: ");

// ternary operator
//const result = (number % 2  == 0) ? "even" : "odd";

// display the result
//console.log(`The number is ${result}.`);