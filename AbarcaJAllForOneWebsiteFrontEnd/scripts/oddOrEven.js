//I need connections to three areas, an input field, submit btn and display text!
let inputNumber = document.getElementById('inputNumber');
let submitBtn = document.getElementById('submitBtn');
let resultTxt = document.getElementById('resultTxt');

//Url for the API
let miniChallenge6Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh6";

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
                resultTxt.textContent = data;
            }
        });
}

submitBtn.addEventListener('click', function () {
    let num = inputNumber.value;

    if (num > 2147483647 || num < -2147483647) {
        resultTxt.textContent = "The number inputed exceeds the range of int 32!";
    } else if (matchPattern = null) {
        console.log('The input does not contain numbers')
    } else if (num === undefined || num == null || num.length <= 0) {
        resultTxt.textContent = "Input a number!";
    } else {

        let miniChallenge6Model = {
            num1: num
        };
        modelMethod(miniChallenge6Url, miniChallenge6Model);
    }


});