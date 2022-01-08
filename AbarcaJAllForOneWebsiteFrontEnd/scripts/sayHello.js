//Connection to the button
let submitBtn = document.getElementById('submitBtn');

//Connection to the input field!
let pinkTxtField = document.getElementById('pinkTxtField');

//Connection to text to display results!
let greetUser = document.getElementById('greetUser');

//Url for the API
let miniChallenge1Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh1";


//Objects to pass in just like in Postman
// let miniChallenge1Model = {
//     userName : "Jesse"
// };


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
                greetUser.textContent = data;
            }
        });
}

//1st mini challenge "Hello Jesse"
// modelMethod(miniChallenge1Url, miniChallenge1Model);


//create an event listener
submitBtn.addEventListener('click', function () {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let userText = pinkTxtField.value;
    let trimmedUserText = userText.trim();
    console.log(trimmedUserText);
    if (trimmedUserText.includes(0)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"
    } else if (trimmedUserText.includes(1)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(2)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(3)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(4)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(5)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(6)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(7)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(8)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(9)) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("~")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("`")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("!")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("@")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("#")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("$")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("%")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("^")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("&")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("*")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("(")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(")")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("-")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("_")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("+")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("=")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("{")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("}")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("[")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("]")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("\\")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("/")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(":")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(";")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("?")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("\"")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(",")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("'")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes("<")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(">")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(",")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText.includes(".")) {
        greetUser.textContent = "You entered numbers or special characters in your name!"

    } else if (trimmedUserText === undefined || trimmedUserText == null || trimmedUserText.length <= 0) {
        greetUser.textContent = "Input your name!"
    } else {
        let miniChallenge1Model = {
            userName: trimmedUserText
        };


        modelMethod(miniChallenge1Url, miniChallenge1Model);
    }


});

