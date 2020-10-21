// Print out a message in console
console.log("Testing...1, 2, 3...");
console.log("-----------------------");

// Declare array
var pets = ["dog", "cat", "fish", "bird"];

// Print out array
console.log(pets);
console.log("-----------------------");

// Let's target each pet and print them out one by one
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);
console.log("-----------------------");

// Do it again with a for loop
for (var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}
console.log("-----------------------");

// Let's do some prompts and confirms
var pet = confirm("Do you like pets?");
if (pet) {
    alert("Awesome!!");

    var answer = prompt("Which would you prefer as a pet? Dog, cat, fish, or bird?");
// Change answer input to all lowercase letters
answer = answer.toLowerCase();
console.log("You picked: " + answer);

if (answer === pets[0] ||
    answer === pets[1] ||
    answer === pets[2] ||
    answer === pets[3] ||
    answer === pets[0] + "s" ||
    answer === pets[1] + "s" ||
    answer === pets[3] + "s") {
        alert("We like those, too!!");
    }

} else {
    alert("Awww...that's too bad...");
}
