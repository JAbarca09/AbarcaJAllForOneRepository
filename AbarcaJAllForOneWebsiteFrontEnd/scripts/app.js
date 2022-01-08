//Jesse Abarca
//1/4/22
//Just as Angel demonstrated, console log data from the fetches to the console for practice. Try not to make multiple fetches.
//Angel informed me that I can parse student directory data to get rid of the brackets in the front of the console log data.

//url: https://abarcajallminichallengeapi.azurewebsites.net/
//Urls for all the mini challenges
let miniChallenge1Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh1";
let miniChallenge2Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh2";
let miniChallenge3Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh3";
let miniChallenge4Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh4";
let miniChallenge5Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh5";
let miniChallenge6Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh6";
let miniChallenge7Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh7";
let miniChallenge8UrlName = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentByName";
let miniChallenge8UrlEmail = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentByEmail";
let miniChallenge8UrlSlackName = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentBySlackName";
let miniChallenge8UrlHobbies = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentByHobbies";
let miniChallenge8UrlRandom = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getRandomStudent";
let miniChallenge9Url = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/miniCh9";


//Objects to pass in just like in Postman
let miniChallenge1Model = {
    userName: "Jesse"
};

let miniChallenge2Model = {
    x: 1,
    y: 2
};

let miniChallenge3Model = {
    name: "Jesse",
    time: "7:20",
    AMorPM: "AM",
};

let miniChallenge4Model = {
    x: 19,
    y: 10
};

let miniChallenge5Model = {
    ProperName1: "Francisca Abarca",
    Adjective2: "Francisca",
    FamousPerson3: "Lady Gaga",
    Noun4: "home",
    Number5: "117",
    Adjective6: "tired",
    Plant7: "Chubacabras",
    Place8: "In-N-Out",
    Adverb9: "very",
    ProperName10: "Jesse Abarca"
};

let miniChallenge6Model = {
    num1: 9
};

let miniChallenge7Model = {
    number: -123456
};

let miniChallenge8ModelName = {
    name: "Jesse Abarca"
};

let miniChallenge8ModelEmail = {
    email: "jcontreras@codestack.co"
};

let miniChallenge8ModelSlackName = {
    slackName: "Danial Dad"
};

let miniChallenge8ModelHobbies = {
    hobbies: "Fishing and Playing Video Games"
};
let miniChallenge9Model = {
    restaurantType: "burger"
};

//If the first character in the data is a braket then JSON parse it!
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
            }
        });
}

//1st mini challenge "Hello Jesse"
modelMethod(miniChallenge1Url, miniChallenge1Model);

//2nd mini challenge 
modelMethod(miniChallenge2Url, miniChallenge2Model);

//3rd mini challenge
modelMethod(miniChallenge3Url, miniChallenge3Model);

//4th mini challenge
modelMethod(miniChallenge4Url, miniChallenge4Model);

//5th mini challenge
modelMethod(miniChallenge5Url, miniChallenge5Model);

//6th mini challenge
modelMethod(miniChallenge6Url, miniChallenge6Model);

//7th mini challenge
modelMethod(miniChallenge7Url, miniChallenge7Model);

//8th mini challenge example w/ name
modelMethod(miniChallenge8UrlName, miniChallenge8ModelName);

//8th mini challenge example w/ email
modelMethod(miniChallenge8UrlEmail, miniChallenge8ModelEmail);

//8th mini challenge example w/ slack name!
modelMethod(miniChallenge8UrlSlackName, miniChallenge8ModelSlackName);

//8th mini challenge example w/ hobbies
modelMethod(miniChallenge8UrlHobbies, miniChallenge8ModelHobbies);

//9th mini challenge
modelMethod(miniChallenge9Url, miniChallenge9Model);


//Get a random student
function getARandomStudent() {
    fetch("https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getRandomStudent")
        .then(resp => resp.text())
        .then(data => console.log(JSON.parse(data)))
}

getARandomStudent();



