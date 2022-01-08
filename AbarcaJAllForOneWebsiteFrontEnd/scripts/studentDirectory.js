// I need connections to 8 items, dropdown, input field, 2 btns, and 4 text tags
let criteriaDropdown = document.getElementById('criteriaDropdown');
let searchInputField = document.getElementById('searchInputField');

//btns
let searchBtn = document.getElementById('searchBtn');
let randomStudentBtn = document.getElementById('randomStudentBtn');

//Text that displays below btns
let studentName = document.getElementById('studentName');
let studentEmail = document.getElementById('studentEmail');
let slackName = document.getElementById('slackName');
let studentHobbies = document.getElementById('studentHobbies');

//Url for the API
let miniChallenge8UrlName = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentByName";
let miniChallenge8UrlEmail = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentByEmail";
let miniChallenge8UrlSlackName = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentBySlackName";
let miniChallenge8UrlHobbies = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getStudentByHobbies";
let miniChallenge8UrlRandom = "https://abarcajallminichallengeapi.azurewebsites.net/Sandbox/getRandomStudent";

let students = [];

//Objects to refer to!
// let miniChallenge8ModelName = {
//     name: "Jesse Abarca"
// };

// let miniChallenge8ModelEmail = {
//     email: "jcontreras@codestack.co"
// };

// let miniChallenge8ModelSlackName = {
//     slackName:"Danial Dad"
// };

// let miniChallenge8ModelHobbies = {
//     hobbies: "Fishing and Playing Video Games"
// };

function modelMethod(url, model){
    fetch(url,{
        method: "POST",
        headers:{
          "Content-Type":"application/json", 
        },
        body: JSON.stringify(model)
    })
    .then((response) => response.text())
    .then((data) => { 
        students = JSON.parse(data);
        if(data[0] === "{"){
            console.log(JSON.parse(data));
            studentName.textContent = "Name: " + students.name;
            studentEmail.textContent = "Email: " + students.email;
            slackName.textContent = "Slack Name: " + students.slackName;
            studentHobbies.textContent = "Hobbies: " + students.hobbies;
        }else{
            console.log(data);
        }
    });
}

function modelMethodWithoutModel(url){
    fetch(url,)
    .then((response) => response.text())
    .then((data) => { 
        students = JSON.parse(data);
        if(data[0] === "{"){
            console.log(JSON.parse(data));
            studentName.textContent = "Name: " + students.name;
            studentEmail.textContent = "Email: " + students.email;
            slackName.textContent = "Slack Name: " + students.slackName;
            studentHobbies.textContent = "Hobbies: " + students.hobbies;
        }else{
            console.log(data);
        }
    });

}


//Get random student
randomStudentBtn.addEventListener('click',function(){
    modelMethodWithoutModel(miniChallenge8UrlRandom);
});

let userSearch;

searchBtn.addEventListener('click', function(){
    //asess what is in the dropdown menu first!
    //1 Name
    //2 Email
    //3 Slack Name
    //4 Hobbies
    if(criteriaDropdown.value == 1){
        //conduct search via name
        //assign value for use
        userSearch = searchInputField.value;
       
        let miniChallenge8ModelName = {
             name: userSearch
        };

        modelMethod(miniChallenge8UrlName, miniChallenge8ModelName);


    }else if(criteriaDropdown.value == 2){
        //conduct search via Email
        //assign value for use
        userSearch = searchInputField.value;

        let miniChallenge8ModelEmail = {
            email: userSearch
        };

        modelMethod(miniChallenge8UrlEmail, miniChallenge8ModelEmail);


    }else if(criteriaDropdown.value == 3){
        //conduct search via slack name
        //assign value for use
        userSearch = searchInputField.value;

        let miniChallenge8ModelSlackName = {
            slackName: userSearch
        };

        modelMethod(miniChallenge8UrlSlackName, miniChallenge8ModelSlackName);

    }else if(criteriaDropdown.value == 4){
        //conduct search via hobbies
        //assign value for use
        userSearch = searchInputField.value;

        let miniChallenge8ModelHobbies = {
            hobbies: userSearch
        };

        modelMethod(miniChallenge8UrlHobbies, miniChallenge8ModelHobbies);

    }
});
