//I need 12 connections including all 10 input fields, submit btn and display text!

let properName1 = document.getElementById('properName1');
let adjective2 = document.getElementById('adjective2');
let famousPerson3 = document.getElementById('famousPerson3');
let noun4 = document.getElementById('noun4');
let number5 = document.getElementById('number5');
let adjective6 = document.getElementById('adjective6');
let plant7 = document.getElementById('plant7');
let place8 = document.getElementById('place8');
let adverb9 = document.getElementById('adverb9');
let properName10 = document.getElementById('properName10');
let submitBtn = document.getElementById('submitBtn');
let displayTxt = document.getElementById('displayTxt')

//Url for the API

let miniChallenge5Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh5";

function modelMethod(url, model) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model)
    })
        .then((response) => response.text())
        .then((data) => {
            if (data[0] === "{") {
                console.log(JSON.parse(data));
                // console.log(data);
            } else {
                console.log(data);
                displayTxt.textContent = data;
            }
        });
}

submitBtn.addEventListener('click', function () {
    let numbers = /^[0-9:]+$/;
    let letters = /^[A-Za-z]+$/
    let one = properName1.value;
    let two = adjective2.value;
    let three = famousPerson3.value;
    let four = noun4.value;
    let five = number5.value;
    let six = adjective6.value;
    let seven = plant7.value;
    let eight = place8.value;
    let nine = adverb9.value;
    let ten = properName10.value;

    let giantString = one + two + three + four + six + seven + eight + nine + ten;


    //Check if the inputs are filled!
    if (one.length <= 0 || two.length <= 0 || three.length <= 0 || four.length <= 0 || five.length <= 0 || six.length <= 0 || seven.length <= 0 || eight.length <= 0 || nine.length <= 0 || ten.length <= 0) {
        displayTxt.textContent = "Ensure the fields are filled!";
    } else {
        //check the input field with the number 
        if (five > 2147483647 || five < -2147483647) {
            displayTxt.textContent = "Input a valid number within the text field.";
        } else {
            //data validate the string input fields
            console.log(giantString);
            //Check the giant string for any numbers or special characters inside it!
            if (giantString.match(letters)) {
                //If my giant string has only letters in it then...
                let miniChallenge5Model = {
                    ProperName1: one,
                    Adjective2: two,
                    FamousPerson3: three,
                    Noun4: four,
                    Number5: five,
                    Adjective6: six,
                    Plant7: seven,
                    Place8: eight,
                    Adverb9: nine,
                    ProperName10: ten
                };
                modelMethod(miniChallenge5Url, miniChallenge5Model);

            } else {
                //If the string has a numbe or special character in it then...
                displayTxt.textContent = "Check your text fields with the exception of number 5 for numbers or special characters";
            }
        }
    }
});


