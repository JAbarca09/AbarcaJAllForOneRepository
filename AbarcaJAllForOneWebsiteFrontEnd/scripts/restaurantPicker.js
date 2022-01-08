// I need a connection to the dropdown, the btn and the text at the bottom!
let restaurantTypeDropdown = document.getElementById('restaurantTypeDropdown');
let submitBtn = document.getElementById('submitBtn');
let resultTxt = document.getElementById('resultTxt');

//Url for the API
let miniChallenge9Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh9";



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
    let typeOfRestaurant;
    if (restaurantTypeDropdown.value == 1) {
        typeOfRestaurant = "pizza";
    } else if (restaurantTypeDropdown.value == 2) {
        typeOfRestaurant = "Mexican";
    } else {
        typeOfRestaurant = "burger";
    }
    let miniChallenge9Model = {
        restaurantType: typeOfRestaurant
    };

    modelMethod(miniChallenge9Url, miniChallenge9Model);

});