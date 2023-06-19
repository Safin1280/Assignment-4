// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example:
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes
// Change background color of the img-container and span tags

// Change the background color of the image container
let imgContainer = document.getElementById("iits-bg");
imgContainer.classList.remove("bg-danger");
imgContainer.style.backgroundColor = "purple";

// Change the color of the highlighted text
let spanTags = document.getElementsByClassName("text-danger");
for (let i = 0; i < spanTags.length; i++) {
  spanTags[i].style.color = "purple";
}

// Change the image source
let image = document.getElementById("iits-img");
image.src ="https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/342163896_221135223874408_6680138574854634889_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFowFy2IGtrA6zzeyht2nHq21z_sbv9SXDbXP-xu_1JcGdyiE2tLlmWl0aTCjDSCx0p7cvYF7p3HdZpw3H0Iof4&_nc_ohc=dqtfp_bTspAAX9GYQAi&_nc_ht=scontent.fdac20-1.fna&oh=00_AfDkkzwjNXE8dMkjykn8x7NleLtU-46NLpDodbeW9ME4tw&oe=64967144";

// Change the size of the image
image.style.width = "400px"; // Set the desired width
image.style.height = "400px"; // Set the desired height

// Update the name

let nameElement = document.getElementById("iits-name");
nameElement.classList.remove("text-danger");
nameElement.textContent = "Safin Ahmed";

// Update the profession
let professionElement = document.getElementById("iits-prof");
professionElement.classList.remove("text-danger");
professionElement.textContent = "Student";

// Update the education
let educationElement = document.getElementById("iits-edu");
educationElement.classList.remove("text-danger");
educationElement.textContent = "Bachelor";

// Update the field of study
let studyElement = document.getElementById("iits-study");
studyElement.classList.remove("text-danger");
studyElement.textContent = "CSE";

// Update the school name
let schoolElement = document.getElementById("iits-school");
schoolElement.classList.remove("text-danger");
schoolElement.textContent = "IUBAT.";

// Update the passion and interest
let passionElement = document.getElementById("iits-passion");
passionElement.classList.remove("text-danger");
passionElement.textContent = "Web Designing";

// Update the number of years
let yearsElement = document.getElementById("iits-numYears");
yearsElement.classList.remove("text-danger");
yearsElement.textContent = "1 year";

// Update the hobbies and interests
let hobbiesElement = document.getElementById("iits-hobby");
hobbiesElement.classList.remove("text-danger");
hobbiesElement.textContent = "creating websites and playing video games";

// Update the personal traits or characteristics
let traitsElement = document.getElementById("iits-crc");
traitsElement.classList.remove("text-danger");
traitsElement.textContent = "Introvert";

// Update the strengths or abilities
let strengthsElement = document.getElementById("iits-ability");
strengthsElement.classList.remove("text-danger");
strengthsElement.textContent = "Focus and create creative things";

// Update the goals or vision
let goalsElement = document.getElementById("iits-goal");
goalsElement.classList.remove("text-danger");
goalsElement.textContent = "Skillful web developer";

// Update the Facebook link
let fbLinkElement = document.getElementById("iits-fb-link");
fbLinkElement.href = "https://www.facebook.com/safin.ahmed.92372/";

// Update the email link
let emailElement = document.getElementById("iits-email");
emailElement.href = "mailto:akash.sky942@gmail.com";

// Update the GitHub link
let githubLinkElement = document.getElementById("iits-github-link");
githubLinkElement.href = "https://github.com/Safin1280";

// Update the copyright message
let copyrightElement = document.getElementById("iits-cr-msg");
copyrightElement.textContent = "2023 Safin Ahmed";

// Change the button color
let button = document.getElementById("iits-btn");
button.classList.remove("btn-danger");
button.style.backgroundColor = "purple";