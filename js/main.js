// variables
var elNumber = document.querySelector(".number");
var elResult = document.querySelector(".result");
var elForm = document.querySelector(".fizzbuzz__form");

elForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("salom");
    elResult.value = fizzbuzz(elNumber.value);
})

// function fizzbuz
function fizzbuzz(num){
    if ( !(num % 3) || !(num % 5)){
        if( num % 3 == 0 && num % 5 == 0 ) return "FIZZBUZZ"
        else if (num % 3 == 0) return "FIZZ"
        else return "BUZZ"
    }
    else return "Iltimos keyingi safar uchga yoki beshga karrali son kiriting :)";
}