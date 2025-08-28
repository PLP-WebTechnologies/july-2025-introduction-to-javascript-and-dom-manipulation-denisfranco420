// ================================
// Part 1: Variables and Conditionals
// ================================
let userName = "Denis";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ================================
// Part 2: Custom Functions
// ================================

// Function 1: Greeting
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the site.";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// ================================
// Part 3: Loops
// ================================

// Example 1: For loop
function generateNumberList() {
  let list = "";
  for (let i = 1; i <= 5; i++) {
    list += "<li>Number " + i + "</li>";
  }
  return list;
}

// Example 2: While loop
function countdown(num) {
  let text = "";
  while (num > 0) {
    text += num + " ";
    num--;
  }
  return text;
}

// ================================
// Part 4: DOM Interactions
// ================================

// Interaction 1: Show greeting when button clicked
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("message").innerText = greetUser(userName);
});

// Interaction 2: Calculate and show result
document.getElementById("calcBtn").addEventListener("click", function () {
  let result = addNumbers(5, 10);
  document.getElementById("result").innerText = "The sum is: " + result;
});

// Interaction 3: Generate a list and display
document.getElementById("listBtn").addEventListener("click", function () {
  document.getElementById("numberList").innerHTML = generateNumberList();
});
