/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");
let myStorydata = null;

fetch(myDataFileUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        myStorydata = data;
        setUpStory('DK');
    })
    .catch((error) => {
        console.error(error);
    })

function setUpStory(myLanguage) {
    let = myStory = null;

    switch (myLanguage) {
        case 'DK':
            myStory = myStorydata.DK;
            break;

            case 'FI':
            myStory = myStorydata.FI;
            break;

            case 'SE':
            myStory = myStorydata.SE;
            break;

            case 'UK':
            myStory = myStorydata.UK;
            break;  

        default:
            myStory = myStorydata.DK;
            break;

    }
    createStory(myStory);
}
function createStory(myStory){
    myStoryElement.innerHTML = ''
    createButtons();

let myHeadline = document.createElement('h2');
myHeadline.innerText = myStory.headline;
let myImage = document.createElement('img');
myImage.src = '../../opgavefiler/img/felix.jpg';
let myParagraf = document.createElement('p');
myParagraf.innerText = myStory.text;


myStoryElement.appendChild(myHeadline);
myStoryElement.appendChild(myImage);
myStoryElement.appendChild(myParagraf);   

}

/* Opgave 2 - skriv videre på koden her: */
// const myDataFileUrl = "../../opgavefiler/data/story.json";
// const myStoryElement = document.getElementById("theStory");
function createButtons(){ 
    let buttonDK = document.createElement('button');
    buttonDK.innerText = 'Dansk';
    buttonDK.addEventListener('click', function() {setUpStory('DK')});

    let buttonFI = document.createElement('button');
    buttonFI.innerText = 'Finsk';
    buttonFI.addEventListener('click', function() {setUpStory('FI')});

    let buttonSE = document.createElement('button');
    buttonSE.innerText = 'Svensk';
    buttonSE.addEventListener('click', function() {setUpStory('SE')});

    let buttonUK = document.createElement('button');
    buttonUK.innerText = 'Engelsk';
    buttonUK.addEventListener('click', function() {setUpStory('UK')});

    myStoryElement.appendChild(buttonDK);
    myStoryElement.appendChild(buttonFI);
    myStoryElement.appendChild(buttonSE);
    myStoryElement.appendChild(buttonUK);

}





/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");


/* Opgave 4*/
// din kode her
