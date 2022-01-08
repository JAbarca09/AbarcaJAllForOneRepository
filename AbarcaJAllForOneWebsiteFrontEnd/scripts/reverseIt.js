//I need the connection of three items, input field, submit btn and text on the bottom
//Remeber about int 32 max number is 2,147,483,647!
let userNum = document.getElementById('userNum');
let submitBtn = document.getElementById('submitBtn');
let displayResult = document.getElementById('displayResult');

//Url for the API
let miniChallenge7Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh7";

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
                displayResult.textContent = data;
            }
        });
}

submitBtn.addEventListener('click', function () {
    let num = userNum.value;

    //Check if the number is within the range and if it even exists!
    if (num > 2147483647 || num < -2147483647) {
        displayResult.textContent = "The number inputed exceeds the range of int 32!";
    } else if (num === undefined || num == null || num.length <= 0) {
        displayResult.textContent = "Input a number!";
    } else {

        let miniChallenge7Model = {
            number: num
        };
        modelMethod(miniChallenge7Url, miniChallenge7Model);
    }

});