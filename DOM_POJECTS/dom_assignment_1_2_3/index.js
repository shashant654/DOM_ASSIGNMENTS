// TASK => 1 
let element = document.createElement("li")
element.innerHTML = "<a>Hire Me </a>"
let parent = document.querySelector("header nav ul")
parent.appendChild(element)

// TASK => 2

let a = document.querySelector(".search-field input")
a.placeholder="Search My Project"

// TASK => 3
let elementt = document.querySelectorAll(".hero-left-section p span");
elementt[1].innerText = "an Employee";
elementt[2].innerText = "iNeuron Inteligence Pvt Ltd";

// TASK => 4
let img_part = document.querySelector(".hero-right-section img")
img_part.src ="./pexels-hitesh-choudhary-13847596.jpg"

// TASK => 5
let supportBtn_part = document.querySelector(".hero-right-section-btns")
let newBtn = document.createElement("button")
newBtn.innerText = "Support Me"
supportBtn_part.appendChild(newBtn)

// TASK => 6
let socialLinks = document.querySelectorAll("footer ul li a");
socialLinks[0].href="https://github.com/shashant654";
socialLinks[1].href="https://www.linkedin.com/feed/";
socialLinks[2].href="https://www.instagram.com/?hl=en";


