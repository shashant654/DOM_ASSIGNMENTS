let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


// TASK => 1 
// let headings = document.querySelectorAll(".accordian h3");
// let paragraphh = document.querySelectorAll(".accordian p");
// headings.forEach((element) => {element.style.backgroundColor = "#dadaf8"});
// paragraphh.forEach((element) => {element.style.backgroundColor = "#cceef"});


//task => 2
// code for adding new accordian to the page
let parent = document.querySelector(".accordian-wrapper")
let element = document.createElement("div")
element.classList.add("accordian")
let heading = document.createElement("h3")
let paragraph = document.createElement("p")
paragraph.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which cna be seen in my work over the Github ."
paragraph.style.display = "none"
heading.innerText = "Skills"
element.appendChild(heading)
element.appendChild(paragraph)
parent.appendChild(element)


 let newList = document.querySelectorAll(".accordian h3")
 newList[newList.length-1].addEventListener("click",(event) => {
  let element = event.target.nextElementSibling;
  if(element.style.display == "block") {
    element.style.display = "none"
  }
    else {
      element.style.display = "block"
    }
 });


// //  for changing the color of paragraph and heading 
// let headingss = document.querySelectorAll(".accordian h3")
// let paragraph = document.querySelectorAll(".accordian p")
// headingss.forEach((element) => {element.style.backgroundColor = "#dadaf8"})
// paragraph.forEach((element) => {element.style.backgroundColor = "#cceef"})


let headings = document.querySelectorAll(".accordian h3");
let paragraphh = document.querySelectorAll(".accordian p");
headings.forEach((element) => {element.style.backgroundColor = "#dadaf8"});
paragraphh.forEach((element) => {element.style.backgroundColor = "#cceef"});








