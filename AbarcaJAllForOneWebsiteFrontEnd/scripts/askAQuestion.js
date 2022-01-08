//I need connections to five pieces the 3 form parts, btn and txt at the bottom
let askName = document.getElementById("askName");
let wokeUp = document.getElementById("wokeUp");
let AMorPM = document.getElementById("AMorPM");
let submitBtn = document.getElementById("submitBtn");
let displayTxt = document.getElementById("displayTxt");
let injectAdditionalError = document.getElementById("injectAdditionalError");

//Url for the API
let miniChallenge3Url =
    "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh3";

let userName = askName.value;
let timeWokeUp = wokeUp.value;
let AmPm;

function modelMethod(url, model) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
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

submitBtn.addEventListener("click", function () {
    let numbers = /^[0-9:]+$/;
    let letters = /^[A-Za-z]+$/

    if (askName.value === undefined || askName.value == null || askName.value.length <= 0) {
        displayTxt.textContent = "Enter a name!";
    } else {
        if (wokeUp.value === undefined || wokeUp.value == null || wokeUp.value.length <= 0) {
            displayTxt.textContent = "Enter a time!";
        }
        //check if the name matches the letters both lowercase and uppercase
        if (askName.value.match(letters)) {
            //check if the time matches the numbers which includes the numbers and colon
            if (wokeUp.value.match(numbers)) {
                //check the length of the time given if it has a length larger than 5 it is an invalid time.
                if (wokeUp.value.length > 5) {
                    displayTxt.textContent = "Invalid Time";
                } else {
                    //Fire data validation is done
                    if (AMorPM.value == 1) {
                        AmPm = "AM";
                    } else {
                        AmPm = "PM";
                    }

                    let miniChallenge3Model = {
                        name: askName.value,
                        time: wokeUp.value,
                        AMorPM: AmPm
                    };
                    modelMethod(miniChallenge3Url, miniChallenge3Model);
                    return true;
                }
            } else {
                //If the time does not match the numbers then...
                displayTxt.textContent = "You entered numbers or special characters in the time!";
            }
        } else {
            //If the name does not match letters then stop immediately...
            displayTxt.textContent = "You entered numbers or special characters in the name!";
        }

    }
});


//Double for loop method to check for stuff!
// let j,x;
// let timeHasLetters;
// const alphabet = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H" , "h", "I", "i", "J", "j" ,"K" ,"k" ,"L" ,"l" ,"M" ,"m" ,"N" ,"n" ,"O" ,"o" ,"P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]
// for(let j = 0; j<alphabet.length; j++){
//     for(let x = 0; x<timeWokeUp.length; x++){
//         if(!timeHasLetters){
//             if(alphabet[j] === timeWokeUp[x]){
//                 displayTxt.textContent = "The time you specified contains letters!"
//                 console.log('Time woke up has letters')
//                 timeHasLetters = true;
//             }else{
//                 console.log('There are no letters in the time!')
//             }
//         }

//     }
// }
