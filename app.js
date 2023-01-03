// console.log("External JS linking");

// alert("Alert demo");

// let userName = prompt("What's the username?");

// alert(`Welcome to the website ${userName}`);

const buttonTranslate = document.querySelector("#btn-translate");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

let textInput = document.querySelector("#input-text");

function createTranslationURL(input) {

return (serverURL + "?text=" + input);

}

let outputDiv = document.querySelector("#output-box");

function clickHandler() {

    let inputText = textInput.value;

    fetch(createTranslationURL(inputText))
    .then( response => response.json() )
    .then( json => {

    let translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;

    })
    .catch(errorHandler)

}

function errorHandler(error) {

    console.log(error);
    alert("The API that translates the text on this website is rate limited to 5 requests/hour. You have sent too many. Please wait an hour before trying again");


}



buttonTranslate.addEventListener("click", clickHandler);