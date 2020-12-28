const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
const temperature = -2;
if (temperature < 0) {
  console.log("Make sure to pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cute it!");
} else {
  console.log("Short sleeves are fine");
}
console.log("You're ready to go outsie!");

const isCitizen = true;
const age = 27;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
var x = 1;
while (x <= 10) {
  console.log(x + " mississippi!");
  x = x + 1;
}

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
