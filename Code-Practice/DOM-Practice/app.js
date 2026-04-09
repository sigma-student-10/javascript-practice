// Selecting Element by Image changed code

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0; i < smallImages.length; i++) {
//     smallImages[i].src="Images/spiderman_img (2).png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// Query Selectors

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("div a"));


// Manipulating Style

// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "yellow";
// }


//for of loop using

// let links = document.querySelectorAll(".box a");

// for(link of links) {
//     link.style.color = "purple";
// }

//Practice QS 1.

// let para1 = document.createElement('p');

// para1.innerText = "Hey i am red";
// document.querySelector('body').append(para1);

// para1.classList.add('red');


// Practice QS 2.

// let h3 = document.createElement('h3');

// h3.innerText = "hey i'm blue";
// document.querySelector('body').append(h3);
// h3.classList.add('blue');



// Practice QS 3 

let div = document.createElement('div');

let h1 = document.createElement('h1');

let para2 = document.createElement('p');

h1.innerText = "I'm inner div";

para2.innerText = "Me too!!";

div.append(h1);

div.append(para2);

div.classList.add("box2");

document.querySelector('body').append(div);