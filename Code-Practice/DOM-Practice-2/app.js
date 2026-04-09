//DOM Events

// let btn = document.querySelector("button");

// btn.onclick = function () {
//     alert("button was clicked");
// }

// DOM events

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
// }

// function sayHello() {
//     alert("Hello");
// }

// Onmouseenter

let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };
    console.dir(btn);
}

function sayHello() {
    alert("hello!");
}