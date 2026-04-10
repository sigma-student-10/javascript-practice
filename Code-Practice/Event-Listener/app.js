let p = document.querySelector("p");

p.addEventListener("click", function () {
    alert("Hi ");
})

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function() {
    console.log("mouse inside box");
});