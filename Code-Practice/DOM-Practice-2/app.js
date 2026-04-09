// //DOM Events

// let btn = document.querySelector("button");

// btn.onclick = function () {
//     alert("button was clicked");
// }

// // DOM events

// let btn = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
// }

// function sayHello() {
//     alert("Hello");
// }

// // Onmouseenter

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
//     console.dir(btn);
// }

// function sayHello() {
//     alert("hello!");
// }

// Event Listener

let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log ("you double clicked me");
    });
}

function sayHello() {
    alert("Apna College");
}

function sayName() {
    alert("Afjol Hossain");
}