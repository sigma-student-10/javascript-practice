// Form Events

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     alert("form submitted");
//     event.preventDefault();
// });


// Extracting form events

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault ();

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log (inp.value);
});
