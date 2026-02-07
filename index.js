// Question No 1 //
// 1. Declare and initialize an empty multidimensional array.//
var emptyArray = [[], [], []];


// Question No 2 //
/* 2. Declare and initialize a multidimensional array
 representing the following matrix */
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(matrix);


// Question No 3 //
/* 3. Write a program to print numeric counting from 1 to 10.8 */
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

 // Question No 4 //
 /* 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.*/
// 1. Get inputs from the user
let num = prompt("Enter table number:");
let len = prompt("Enter table length:");

let table = ""; // This will hold our final table text

// 2. The loop
for (let i = 1; i <= len; i++) {
    // Add each line to our table string
    table += num + " x " + i + " = " + (num * i) + "\n";
}

// 3. Show the result
alert("Multiplication Table for " + num + ":\n" + table);



// Question No 5 //
/* 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i]);
}

// Question No 6 //
/* Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k,*/
// a. Counting: 1 to 15
document.write("<b>Counting:</b> <br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br><br>"); // Adds space between series

// b. Reverse counting: 10 down to 1
document.write("<b>Reverse counting:</b> <br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<br><br>");

// c. Even: 0 to 20
document.write("<b>Even:</b> <br>");
for (let i = 0; i <= 20; i = i + 2) {
    document.write(i + ", ");
}

document.write("<br><br>");

// d. Odd: 1 to 19
document.write("<b>Odd:</b> <br>");
for (let i = 1; i <= 19; i = i + 2) {
    document.write(i + ", ");
}

document.write("<br><br>");

// e. Series: 2k to 20k
document.write("<b>Series:</b> <br>");
for (let i = 2; i <= 20; i = i + 2) {
    document.write(i + "k, ");
}



// Question No 7 //
/* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not.*/
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === search) {
        console.log(search + " is available at index " + i + " in our bakery");
        found = true;
        break;
    }
}
if (!found) {
    console.log("We are sorry. " + search + " is not available in our bakery");
}



// Question No 8 //
/* 8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].*/
console.log("The largest number is " + Math.max(...arr));

// Question No 9 //
/* 9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]*/
console.log("The smallest number is " + Math.min(...arr));


// Question No 10 //
/* 10. Write a program to print multiples of 5 ranging 1 to 100 */
var multiples = [];
for (var i = 5; i <= 100; i += 5) {
    multiples.push(i);
}
console.log(multiples.join(", "));





// Question No 10 //
/* 1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);



// Question No 11 //
/* 2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser. */
var phone = prompt("Favorite mobile phone model?");
document.write("My favorite phone is: " + phone + "<br>Length of string: " + phone.length);
// Question No 12 //
/* 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser.*/
var  word = "Pakistani";
document.write("String: " + word + "<br>Index of 'n': " + word.indexOf("n"));


// Question No 13 //
/* 4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.*/
var greet = "Hello World";
document.write("String: " + greet + "<br>Last index of 'l': " + greet.lastIndexOf("l"));


// Question No 14 //
/* 5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/
document.write("String: Pakistani<br>Character at index 3: " + "Pakistani".charAt(3));




// Question No 15 //
/* Repeat Q1 using string concat() method.*/
var fullNameConcat = firstName.concat(" ", lastName);


// Question No 16 //
/* 7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.*/
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam"); 

// Question No 17 //
/*8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.*/
var message = "Ali and Sami are best friends. They play cricket and football together.";



// Question No 18 //
/* 9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser.*/
var strNum = "472";
var num = Number(strNum);
document.write("Value: " + strNum + "<br>Type: " + typeof(strNum) + "<br>Value: " + num + "<br>Type: " + typeof(num));


// Question No 19 //
/*10. Write a program that takes user input. Convert and
show the input in capital letters.*/
var userInput = prompt("Enter text");
console.log("Upper Case: " + userInput.toUpperCase());


// Question No 20 //
/*11. Write a program that takes user input. Convert and
show the input in title case.*/
let userInput = prompt("Enter text");
console.log("Title Case: " + userInput[0].toUpperCase() + userInput.slice(1).toLowerCase());


// Question No 21 //
/*12. Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.*/
var numVar = 35.36;
var resultStr = numVar.toString().replace(".", ""); 


// Question No 22 //
/*13. Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .*/
var username = prompt("Enter username");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username");
}


// Question No 23 //
/*14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example:*/
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("What do you want to order?").toLowerCase();
if (bakeryItems.includes(order)) {
    alert(order + " is available");
} else {
    alert("We are sorry, " + order + " is not available");
}



// Question No 24 //
/*15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/





// Question No 25 //
/*16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.*/
var university = "University of Karachi";
var uniArr = university.split("");
for (var i = 0; i < uniArr.length; i++) {
    document.write(uniArr[i] + "<br>"); 
}



// Question No 26 //
/*17. Write a program to display the last character of a user input.*/
var userIn = prompt("Enter text");
document.write("Last character: " + userIn.charAt(userIn.length - 1)); 



// Question No 27 //
/*18. You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string.*/
var text = "The quick brown fox jumps over the lazy dog"; 
var count = (text.toLowerCase().match(/the/g) || []).length;
document.write("There are " + count + " occurrence(s) of word 'the'"); 





































