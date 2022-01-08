//I need access to 4 elements: firstnumber, second number, btn, and sum text
let firstNumberInput = document.getElementById('firstNumberInput');

let secondNumberInput = document.getElementById('secondNumberInput');

let addBtn = document.getElementById('addBtn');

let sumTxt = document.getElementById('sumTxt');

//url for the API
let miniChallenge2Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh2";


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
                sumTxt.textContent = data;
            }
        });
}


addBtn.addEventListener('click', function () {

    let firstNum = firstNumberInput.value;
    let secondNum = secondNumberInput.value;

    //data validation: check if one or both numbers exceeds int 32.
    //Do the numbers even exist what if it is empty?
    if (firstNum > 2147483647 || firstNum < -2147483647) {
        sumTxt.textContent = "The first number exceeded the range (int32).";
        if (secondNum > 2147483647 || secondNum < -2147483647) {
            sumTxt.textContent = "Both numbers exceeded the range (int32).";
        }
    } else if (secondNum > 2147483647 || secondNum < -2147483647) {
        sumTxt.textContent = "The second number exceeded the range (int32).";
    } else if (firstNum === undefined || firstNum == null || firstNum.length <= 0) {
        //Check the second number to see if both are missing!
        if (secondNum === undefined || secondNum == null || secondNum.length <= 0) {
            sumTxt.textContent = "Input two numbers!";
        } else {
            sumTxt.textContent = "Input a number for first number!";
        }
    } else if (secondNum === undefined || secondNum == null || secondNum.length <= 0) {
        sumTxt.textContent = "Input a number for second number!"
    } else {

        let miniChallenge2Model = {
            x: firstNum,
            y: secondNum
        };

        modelMethod(miniChallenge2Url, miniChallenge2Model);
    }

});

