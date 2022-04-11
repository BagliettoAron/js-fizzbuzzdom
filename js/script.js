// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

const rowContent = document.querySelector(".row");


for (let i = 1; i <= 100; i++) {

    // 1.a. definire se sono multipli di 3
    let FizzOrBuzz = "";

    if (i % 3 === 0) {
        FizzOrBuzz = "Fizz";
        if (i % 5 === 0){
            FizzOrBuzz = "FizzBuzz";
        }

    }else if (i % 5 === 0) { 
        FizzOrBuzz = "Buzz";
        if (i % 3 === 0){
            FizzOrBuzz = "FizzBuzz";
        }
    }

    rowContent.innerHTML += `<div class="number-box">${FizzOrBuzz || i}</div>`;
}