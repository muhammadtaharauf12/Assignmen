//1. Computer 1 se 10 ke beech ek number sochega//
let computerNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;

alert("Maine 1 se 10 tak ek number socha hai. Guess karen!");

// 2. Loop tab tak chalega jab tak guess sahi na ho
while (userGuess != computerNumber) {
    userGuess = prompt("Aapka guess kya hai?");

    // 3. Guess check karne ki logic
    if (userGuess == computerNumber) {
        alert("Mubarak ho! Sahi guess kiya.");
    } 
    else if (userGuess > computerNumber) {
        alert("Too High! Thoda niche.");
    } 
    else {
        alert("Too Low! Thoda upar.");
    }
}