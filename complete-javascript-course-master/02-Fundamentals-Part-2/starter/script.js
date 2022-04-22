"use strict"; //more secure coding

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");

//no bueno
//const interface = "audio";
//const private = 454;
//const if = 34;
*/
/*
function logger() {
  console.log("my name is jonas");
}

// calling / running or invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges!!`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//1. Write a function called 'describeCountry' which takes three parameters:
//'country', 'population' and 'capitalCity'. Based on this input, the
//function returns a string with this format: 'Finland has 6 million people and its
//capital city is Helsinki
//2. Call this function 3 times, with input data for 3 different countries. Store the
//returned values in 3 different variables, and log them to the console
function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return string;
}

const portugal = describeCountry("Portugal", 3, "Lisboa");
const usa = describeCountry("USA", 32, "dc");
const outro = describeCountry("Outro", 92, "dont know");

console.log("\n" + portugal);
console.log(usa);
console.log(outro);
*/
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//1. The world population is 7900 million people. Create a function declaration
//called 'percentageOfWorld1' which receives a 'population' value, and
//returns the percentage of the world population that the given population
//represents. For example, China has 1441 million people, so it's about 18.2% of
//the world population
//2. To calculate the percentage, divide the given 'population' value by 7900
//and then multiply by 100
//3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
//store the results into variables, and log them to the console
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const portugal = percentageOfWorld1(500);
const outro = percentageOfWorld1(2500);

console.log("\n" + china);
console.log(portugal);
console.log(outro);

//4. Create a function expression which does the exact same thing, called
//'percentageOfWorld2', and also call it with 3 country populations (can be
//the same populations)
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const china2 = percentageOfWorld2(1441);
const portugal2 = percentageOfWorld2(500);
const outro2 = percentageOfWorld2(2500);

console.log("\n" + china2);
console.log(portugal2);
console.log(outro2);
*/
/*
//arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, fristName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${fristName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1980, "bob"));

//1. Recreate the last assignment, but this time create an arrow function called
//'percentageOfWorld3'
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} apples and ${orangesPieces} oranges!!`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//1. Create a function called 'describePopulation'. Use the function type you
//like the most. This function takes in two arguments: 'country' and
//'population', and returns a string like this: 'China has 1441 million people,
//which is about 18.2% of the world.'
//2. To calculate the percentage, 'describePopulation' call the
//'percentageOfWorld1' you created earlier
//3. Call 'describePopulation' with data for 3 countries of your choice
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}

console.log("\n" + describePopulation("china", 1441));
console.log(describePopulation("portugal", 500));
console.log(describePopulation("outro", 3500));
*/
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, fristName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  //return `${fristName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1970, "mike"));
*/
/*
//challenge 1
//Each team competes 3 times, and then the average of the 3 scores is calculated (so
//one average score per team).
//A team only wins if it has at least double the average score of the other team.
//Otherwise, no team wins!
//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => {
  const avgScore = (score1 + score2 + score3) / 3;
  return avgScore;
};

//2. Use the function to calculate the average for both teams
//Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
const dolphinsAvgScore1 = calcAverage(44, 23, 71);
const koalasAvgScore1 = calcAverage(65, 54, 49);
console.log(dolphinsAvgScore1, koalasAvgScore1);

//Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const dolphinsAvgScore2 = calcAverage(85, 54, 41);
const koalasAvgScore2 = calcAverage(23, 34, 27);
console.log(dolphinsAvgScore2, koalasAvgScore2);

//3. Create a function 'checkWinner' that takes the average score of each team
//as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
//to the console, together with the victory points, according to the rule above.
//Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
  } else {
    console.log("no win");
  }
};

//4. Use the 'checkWinner' function to determine the winner for both Data 1 and
//Data 2
checkWinner(dolphinsAvgScore1, koalasAvgScore1);
checkWinner(dolphinsAvgScore2, koalasAvgScore2);
*/
/*
const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["michael", "steven", "peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //length not zero base

friends[2] = "jay";
console.log(friends);
//friends = ["bob", "alice"]; no bueno

const fristName = "jonas";
const jonas = [fristName, "scmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages);

//1. Create an array containing 4 population values of 4 countries of your choice.
//You may use the values you have been using previously. Store this array into a
//variable called 'populations'
const populations = [50, 540, 3132, 879];

//2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length);

//3. Create an array called 'percentages' containing the percentages of the
//world population for these 4 population values. Use the function
//'percentageOfWorld1' that you created earlier to compute the 4
//percentage values
const percentages = [
  (populations[0] / 7900) * 100,
  (populations[1] / 7900) * 100,
  (populations[2] / 7900) * 100,
  (populations[populations.length - 1] / 7900) * 100,
];
console.log(percentages);
*/
/*
const friends = ["micheal", "steven", "peter"];

//add elements
const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);

//remove elements
friends.pop(); // last element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //frist element
console.log(friends);

console.log(friends.indexOf("steven"));
console.log(friends.indexOf("bob"));

friends.push(23);
console.log(friends.includes("steven"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));

if (friends.includes("steven")) {
  console.log("you have a friend called steven");
}

//1. Create an array containing all the neighbouring countries of a country of your
//choice. Choose a country which has at least 2 or 3 neighbours. Store the array
//into a variable called 'neighbours'
const neighbours = ["portugal", "sweden"];

//2. At some point, a new country called 'Utopia' is created in the neighbourhood of
//your selected country. So add it to the end of the 'neighbours' array
neighbours.unshift("utopia");

//3. Unfortunately, after some time, the new country is dissolved. So remove it from
//the end of the array
neighbours.pop();

//4. If the 'neighbours' array does not include the country ‘Germany’, log to the
//console: 'Probably not a central European country :D

//5. Change the name of one of your neighbouring countries. To do that, find the
//index of the country in the 'neighbours' array, and then use that index to
//change the array at that index position. For example, you can search for
//'Sweden' in the array, and then replace it with 'Republic of Sweden'.

if (!neighbours.includes("germany")) {
  console.log("Probably not a central European country");
}

neighbours.unshift("sweden");
if (neighbours.includes("sweden")) {
  const index = neighbours.indexOf("sweden");
  neighbours[index] = "republic of sweden";
  console.log(neighbours);
}
*/
/*
//challenge 2
//Steven is still building his tip calculator, using the same rules as before: Tip 15% of
//the bill if the bill value is between 50 and 300, and if the value is different, the tip is
//20%.

//1. Write a function 'calcTip' that takes any bill value as an input and returns
//the corresponding tip, calculated based on the rules above (you can check out
//the code from first tip calculator challenge if you need to). Use the function
//type you like the most. Test the function using a bill value of 100
function calcTip(bill) {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    tip = (bill / 100) * 15;
    return tip;
  } else {
    tip = (bill / 100) * 20;
    return tip;
  }
}

console.log(calcTip(100));

//2. And now let's use arrays! So create an array 'bills' containing the test data
//below
//Test data: 125, 555 and 44
const bills = [125, 555, 44];
console.log(bills);

//3. Create an array 'tips' containing the tip value for each bill, calculated from
//the function you created before
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
/*
const jonasArray = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];

const jonas = {
  firstName: "jonas",
  lastName: "schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["micheal", "peter", "steven"],
};

console.log(jonasArray);
console.log(jonas);

//1. Create an object called 'myCountry' for a country of your choice, containing
//properties 'country', 'capital', 'language', 'population' and
//'neighbours' (an array like we used in previous assignments)
const myCountry = {
  country: "portugal",
  capital: "lisboa",
  language: "portuguese",
  population: 2354,
  neighbours: ["espanha", "no more"],
};
console.log(myCountry);
*/
/*
const jonas = {
  firstName: "jonas",
  lastName: "schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["micheal", "peter", "steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const namekey = "Name";
console.log(jonas["first" + namekey]);
console.log(jonas["last" + namekey]);

//console.log(jonas."last"+nameKey); no bueno

const interestedIn = prompt(
  "what do you want to know about jonas? choose between firstName, lastName, age, job, and friends"
);
//console.log(jonas.interestedIn); //no bueno

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request!! choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "portugal";
jonas["twitter"] = "@jonasschemtnan";
console.log(jonas);

//challenge
//"jonas has 3 friends, and his best friend is called michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

//1. Using the object from the previous assignment, log a string like this to the
//console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
//and a capital called Helsinki.'
const myCountry = {
  country: "finland",
  capital: "helsinki",
  language: "finish",
  population: 6,
  neighbours: ["espanha", "no more", "3countries"],
};
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

//2. Increase the country's population by two million using dot notation, and then
//decrease it by two million using brackets notation.
myCountry.population = myCountry.population + 2;
console.log(
  `\n${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry["population"] = myCountry["population"] - 2;
console.log(
  `\n${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
*/
/*
const jonas = {
  firstName: "jonas",
  lastName: "schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["micheal", "peter", "steven"],
  hasDriversLicense: true,

  //  calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }, 

  //    calcAge: function () {
  //   //console.log(this);
  //   return 2037 - this.birthYear;
  // }, 

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas["calcAge"]());

console.log(jonas.age);

//challenge
//"jonas is a 46-year old teacher, and he has a/no driver's license."
console.log(jonas.getSummary());

//1. Add a method called 'describe' to the 'myCountry' object. This method
//will log a string to the console, similar to the string logged in the previous
//assignment, but this time using the 'this' keyword
const myCountry = {
  country: "finland",
  capital: "helsinki",
  language: "finish",
  population: 6,
  neighbours: ["espanha", "no more", "3countries"],

  describe: function () {
    return `\n${this.country} has ${this.population} million ${this.language}-speaking people, 
${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
};

//2. Call the 'describe' method
console.log(myCountry.describe());

//3. Add a method called 'checkIsland' to the 'myCountry' object. This
//method will set a new property on the object, called 'isIsland'.
//'isIsland' will be true if there are no neighbouring countries, and false if
//there are. Use the ternary operator to set the property.
const myCountry2 = {
  country: "finland",
  capital: "helsinki",
  language: "finish",
  population: 6,
  neighbours: ["espanha", "no more", "3countries"],

  describe: function () {
    return `\n${this.country} has ${this.population} million ${this.language}-speaking people, 
${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry2.checkIsland();
console.log(myCountry2);
*/
/*
//challenge 3
//Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
//implement the calculations! Remember: BMI = mass / height ** 2 = mass
/// (height * height) (mass in kg and height in meter)

//1. For each of them, create an object with properties for their full name, mass, and
//height (Mark Miller and John Smith)

//2. Create a 'calcBMI' method on each object to calculate the BMI (the same
//method on both objects). Store the BMI value to a property, and also return it
//from the method

//3. Log to the console who has the higher BMI, together with the full name and the
//respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

//Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
//tall.

const mark = {
  firstName: "mark",
  lastName: "miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "john",
  lastName: "smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

if (mark.calcBMI() < john.calcBMI()) {
  console.log(
    `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.firstName
    }'s (${mark.calcBMI()})!`
  );
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.firstName
    }'s (${john.calcBMI()})!`
  );
} else {
  console.log("its a draw");
}
*/
/*
//no bueno
// console.log("liftign weights repetition 1");
// console.log("liftign weights repetition 2");
// console.log("liftign weights repetition 3");
// console.log("liftign weights repetition 4");
// console.log("liftign weights repetition 5");
// console.log("liftign weights repetition 6");
// console.log("liftign weights repetition 7");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`liftign weights repetition ${rep}`);
}

//1. There are elections in your country! In a small town, there are only 50 voters.
//Use a for loop to simulate the 50 people voting, by logging a string like this to
//the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/
/*
const jonasArray = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
  true,
];

const types = [];

for (let i = 0; i <= jonasArray.length - 1; i++) {
  console.log(jonasArray[i], " => ", typeof jonasArray[i]);

  //types[i] = typeof jonasArray[i];
  //console.log(jonasArray[i], " => ", types[i]);

  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log(`\n ----- ONLY STRINGS --------`);
for (let i = 0; i <= jonasArray.length - 1; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], " => ", typeof jonasArray[i]);
}

console.log(`\n ----- BREAK WITH NUMBER --------`);
for (let i = 0; i <= jonasArray.length - 1; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], " => ", typeof jonasArray[i]);
}

//1. Let's bring back the 'populations' array from a previous assignment
const populations = [50, 540, 3132, 879];

//2. Use a for loop to compute an array called 'percentages2' containing the
//percentages of the world population for the 4 population values. Use the
//function 'percentageOfWorld1' that you created earlier
const percentages2 = [];
for (let i = 0; i <= populations.length - 1; i++) {
  percentages2.push((populations[i] / 7900) * 100);
}
console.log(percentages2);
//3. Confirm that 'percentages2' contains exactly the same values as the
//'percentages' array that we created manually in the previous assignment,
//and reflect on how much better this solution is
const percentages = [
  (populations[0] / 7900) * 100,
  (populations[1] / 7900) * 100,
  (populations[2] / 7900) * 100,
  (populations[populations.length - 1] / 7900) * 100,
];
console.log(percentages);
*/
/*
const jonasArray = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
  true,
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`=========== Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`exercise ${exercise}: lifting weight repetition ${rep}`);
  }
}

//1. Store this array of arrays into a variable called 'listOfNeighbours'
//[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//'Russia']];
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

//2. Log only the neighbouring countries to the console, one by one, not the entire
//arrays. Log a string like 'Neighbour: Canada' for each country

//3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
//worry if it's too difficult for you! But you can still try to figure this out anyway

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  for (let x = 0; x <= listOfNeighbours[i].length - 1; x++)
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
}
console.log(listOfNeighbours);
*/
/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`liftign weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`liftign weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end....");
}

//1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
//but this time using a while loop (call the array 'percentages3')
const populations = [50, 540, 3132, 879];
const percentages3 = [];

let i = 0;
while (i <= populations.length - 1) {
  percentages3.push((populations[i] / 7900) * 100);
  i++;
}
console.log(percentages3);

//2. Reflect on what solution you like better for this task: the for loop or the while
//loop?
//for loop is better for when the programmer knows the exact number to stop at
//while loop for an unknown amount of looping
*/
/*
//challenge 4
//1. Create an array 'bills' containing all 10 test bill values
//Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

//3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
//tips and total values (bill + tip) for every bill value in the bills array. Use a for
//loop to perform the 10 calculations
for (let i = 0; i <= bills.length - 1; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    tips.push((bills[i] / 100) * 15);
  } else {
    tips.push((bills[i] / 100) * 20);
  }
  totals.push(tips[i] + bills[i]);
}
console.log("bills " + bills);
console.log("tips " + tips);
console.log("totals " + totals);

//4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
//an argument. This function calculates the average of all numbers in the given
//array. This is a difficult challenge (we haven't done this before)! Here is how to
//solve it:

//4.1. First, you will need to add up all values in the array. To do the addition,
//start by creating a variable 'sum' that starts at 0. Then loop over the
//array using a for loop. In each iteration, add the current value to the
//'sum' variable. This way, by the end of the loop, you have all values
//added together

//4.2. To calculate the average, divide the sum you calculated before by the
//length of the array (because that's the number of elements)

//4.3. Call the function with the 'totals' array
let arr = [];
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
