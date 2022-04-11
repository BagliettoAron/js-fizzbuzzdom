// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

const rowContent = document.querySelector(".row");

// 1.a. definire la cascata numerica
for (let i = 1; i <= 100; i++) {
    let FizzOrBuzz = "";
    
    // 1.b. definire se è multiplo di 3
    if (i % 3 === 0) {
        FizzOrBuzz = "Fizz";
        // 1.c. definire se è anche multiplo di 5
        if (i % 5 === 0){
            FizzOrBuzz = "FizzBuzz";
        }
        
    // 1.b. definire se è multiplo di 3
    }else if (i % 5 === 0) { 
        FizzOrBuzz = "Buzz";
        if (i % 3 === 0){
            // 1.c. definire se è anche multiplo di 5
            FizzOrBuzz = "FizzBuzz";
        }
    }

    // 2. assegnazione colori e classi
    rowContent.innerHTML += `<div class="number-box ${FizzOrBuzz}">${FizzOrBuzz || i}</div>`;

}