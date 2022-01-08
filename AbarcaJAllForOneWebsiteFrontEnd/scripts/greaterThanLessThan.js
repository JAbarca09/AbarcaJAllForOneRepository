//I need connections to 4 elements, the number inputs, the submit btn and the final statement!
let firstNumberInput = document.getElementById('firstNumberInput');
let secondNumberInput = document.getElementById('secondNumberInput');
let submitBtn = document.getElementById('submitBtn');
let displayEvaluation = document.getElementById('displayEvaluation');

//Url for the API
let miniChallenge4Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh4";

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
                displayEvaluation.textContent = data;
            }
        });
}

submitBtn.addEventListener('click', function () {
    let firstNum = firstNumberInput.value;
    let secondNum = secondNumberInput.value;


    //data validation: check if one or both numbers exceeds int 32.
    //Do the numbers even exist what if it is empty?
    if (firstNum > 2147483647 || firstNum < -2147483647) {
        displayEvaluation.textContent = "The first number exceeded the range (int32).";
        if (secondNum > 2147483647 || secondNum < -2147483647) {
            displayEvaluation.textContent = "Both numbers exceeded the range (int32).";
        }
    } else if (secondNum > 2147483647 || secondNum < -2147483647) {
        displayEvaluation.textContent = "The second number exceeded the range (int32).";
    } else if (firstNum === undefined || firstNum == null || firstNum.length <= 0) {
        //Check the second number to see if both are missing!
        if (secondNum === undefined || secondNum == null || secondNum.length <= 0) {
            displayEvaluation.textContent = "Input two numbers!";
        } else {
            displayEvaluation.textContent = "Input a number for first number!";
        }
    } else if (secondNum === undefined || secondNum == null || secondNum.length <= 0) {
        displayEvaluation.textContent = "Input a number for second number!"
    } else {
        let miniChallenge4Model = {
            x: firstNum,
            y: secondNum
        };

        modelMethod(miniChallenge4Url, miniChallenge4Model);
    }
});