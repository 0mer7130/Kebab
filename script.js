let total = 0;
const first = {
  1: { name: "Bread", price: 3 },
  2: { name: "Wrap", price: 5 },
}
const second = {
  1: { name: "Chicken", price: 1 },
  2: { name: "Beef", price: 3 },
  3: { name: "Lamb", price: 2 },
  4: { name: "Fish", price: 3 },
  5: { name: "Vegan", price: 4 },
  6: { name: "omers meat", price: 3114 },
}
const third = {
  1: { name: "Lettuce", price: 1 },
  2: { name: "Tomato", price: 1 },
  3: { name: "Onion", price: 1 },
  4: { name: "Pickles", price: 1 },
  5: { name: "Cucumber", price: 1 },
  6: { name: "Jalapenos", price: 1 },
  7: { name: "Olives", price: 1 },
  8: { name: "Peppers", price: 1 },
  9: { name: "Cabbage", price: 1 },
}
const kebab = [];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Selam Welcome to my Kebab Shop");
welcome();
function welcome() {
  console.log("Would you like to order?");
  rl.question("1. Yes - 2. No", function (choice) {
    if (choice === "1") {
      console.clear();
      lore();
    }
    else if (choice === "2") {
      console.clear();
      console.log("Goodbye!");
      return;
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      welcome();
    }
  });
}
function lore() {
  console.log("Would you like to hear the story of our shop before you order?");
  rl.question("1. Yes - 2. No", function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("Our shop is a family owned business that has been around for over 100 years. We pride ourselves on our fresh ingredients and our secret recipes that have been passed down through generations. We are known for our unique and delicious kebabs that are made with love and care. Our shop is a place where you can come to enjoy a great meal and experience the warmth and hospitality of our family. We look forward to serving you and hope you enjoy your time with us.");
      keepgoing();
    }
    else if (choice === "2") {
      console.clear();
      showBread()
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      welcome();
    }
  });
}
function keepgoing() {
  rl.question("1. thats deep - 2. I dont care", function (choice) {
    if (choice === "1") {
      console.clear();
      showBread();
    }
    else if (choice === "2") {
      console.clear();
      console.log("Goodbye!");
      return;
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      welcome();
    }
  });
}
function showBread() {
  console.clear();
  console.log("Here are our Options:");
  for (let item in first) {
    console.log(`${item}: ${first[item].name} - $${first[item].price}`);
  }

  rl.question("What type of Bread would you like?", function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("You have chosen Bread. That will be $3.");
      total += 3;
      kebab.push("Bread");
      keeporder();
    }
    else if (choice === "2") {
      console.clear();
      console.log("You have chosen Wrap.")
      total += 5;
      kebab.push("Wrap");;
      keeporder();

    }
    else if (choice === "3") {
      console.clear();
      console.log("You have chosen rat meat!!!.");
      total += 10000;
      kebab.push("rat meat");
      keeporder();
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      showBread();
    }

  });
}
function keeporder() {
  console.clear();
  console.log("Before continuing would you like to see your order and total?");
  rl.question("1. Yes - 2. No thanks", function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("Your order is: " + kebab + "\n Your total is: $" + total);
meatorder();
    }
    else if (choice === "2") {
      console.clear();
      meatorder();

    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      keeporder();
    }
  })
};
function keeporder2() {
  console.clear();
  console.log("Before continuing would you like to see your order and total?");
  rl.question("1. Yes - 2. No thanks", function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("Your order is: " + kebab + "\n Your total is: $" + total);
salads();
    }
    else if (choice === "2") {
      console.clear();
      salads();

    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      keeporder2();
    }
  })
};

function keeporder3() {
  console.log("Here is your total " + total);
  console.log("How would you want to pay?");
  rl.question("1. Cash - 2. Card - 3. Run away", function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("You have chosen to pay by Cash. Thanks for your visit!");
     done();
    }
    else if (choice === "2") {
      console.clear();
      console.log("You have chosen to pay by Card. Thanks for your visit!");
      done();
    }
    else if (choice === "3") {
      console.clear();
      console.log("You died :(");
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      keeporder3();
    }
  });
}
function meatorder() {
  console.log("Here are our meat options:");
  console.log("If youre done selecting Meats press 7.");
  for (let item in second) {
    console.log(`${item}: ${second[item].name} - $${second[item].price}`);
  }
  rl.question("What meat would you like with your " + kebab, function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("You have chosen Chicken that will be $1.");
      total += 1;
      kebab.push("Chicken");
      meatorder();
    }
    else if (choice === "2") {
      console.clear();
      console.log("You have chosen Beef that will be $3.");
      total += 3;
      kebab.push("Beef");
      meatorder();
    }
    else if (choice === "3") {
      console.clear();
      console.log("You have chosen Lamb that will be $2.");
      total += 2;
      kebab.push("Lamb");
      meatorder();
    }
    else if (choice === "4") {
      console.clear();
      console.log("You have chosen Fish that will be $3.");
      total += 3;
      kebab.push("Fish");
      meatorder();
    }
    else if (choice === "5") {
      console.clear();
      console.log("You have chosen Vegan that will be $4.");
      total += 4;
      kebab.push("Vegan");
      meatorder();
    }
    else if (choice === "6") {
      console.clear();
      console.log("You have chosen omers meat that will be $3114.");
      total += 3114;
      kebab.push("omers meat");
      meatorder();
    }
    else if (choice === "7") {
keeporder2();
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      meatorder();
    }

  });
}

function salads() {
  console.log("Would other ingredients do you want to add?");
  console.log("If youre done selecting Salads press 10.");
  for (let item in third) {
    console.log(`${item}: ${third[item].name} - $${third[item].price}`);
  }
  rl.question("What salad would you like with your " + kebab, function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("You have chosen Lettuce that will be $1.");
      total += 1;
      kebab.push("Lettuce");
      salads();
    }
    else if (choice === "2") {
      console.clear();
      console.log("You have chosen Tomato that will be $1.");
      total += 1;
      kebab.push("Tomato");
      salads();
    }
    else if (choice === "3") {
      console.clear();
      console.log("You have chosen Onion that will be $1.");
      total += 1;
      kebab.push("Onion");
      salads();
    }
    else if (choice === "4") {
      console.clear();
      console.log("You have chosen Pickles that will be $1.");
      total += 1;
      kebab.push("Pickles");
      salads();
    }
    else if (choice === "5") {
      console.clear();
      console.log("You have chosen Cucumber that will be $1.");
      total += 1;
      kebab.push("Cucumber");
      salads();
    }
    else if (choice === "6") {
      console.clear();
      console.log("You have chosen Jalapenos that will be $1.");
      total += 1;
      kebab.push("Jalapenos");
      salads();
    }
    else if (choice === "7") {
      console.clear();
      console.log("You have chosen Olives that will be $1.");
      total += 1;
      kebab.push("Olives");
      salads();
    }
    else if (choice === "8") {
      console.clear();
      console.log("You have chosen Peppers that will be $1.");
      total += 1;
      kebab.push("Peppers");
      salads();
    }
    else if (choice === "9") {
      console.clear();
      console.log("You have chosen Cabbage that will be $1.");
      total += 1;
      kebab.push("Cabbage");
      salads();
    }
    else if (choice === "10") {
      spicy();
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      salads();
    }

  });
}
function spicy() {
  console.clear();
  console.log("Would you like to add some spice to your kebab?");
  rl.question("1. Yes - 2. No", function (choice) {
    if (choice === "1") {
      console.clear();
      console.log("You have chosen to add spice to your kebab.");
      total += 1;
      kebab.push("Spice");
      keeporder3();
    }
    else if (choice === "2") {
      console.clear();
      console.log("You have chosen not to add spice to your kebab.");
      keeporder3();
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      spicy();
    }
  });
}
function done() {
  console.log("Would you like to order again?");
  rl.question("1. Yes - 2. No", function (choice) {
    if (choice === "1") {
      console.clear();
      welcome();
    }
    else if (choice === "2") {
      console.clear();
      console.log("Goodbye! Thanks for visiting!");
    }
    else {
      console.clear();
      console.log("Invalid selection. Please try again.");
      done();
    }
  });
}