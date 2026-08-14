function hello() {
    console.log("inside hello func");
    console.log("hello");
}

function world() {
    console.log("inside world func");
    console.log("world");
}

function demo() {
    console.log("calling hello func");
    hello();
}

console.log("calling demo func");
console.log("he is so beauty");
hello();
world();
demo();
console.log("done, by");
