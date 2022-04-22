/*
let js = "amazing";
//if (js === "amazing") alert("javascript is fun!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "matilda";

let first = "jonas";
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 30;
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJob = "teacher";

//bad variable names
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let country = "portugal";
let continent = "something";
let population = 30000000;
console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 20);
//console.log(typeof "lol");

javascriptIsFun = "yes!!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let isIsland = true;
let language;
let country = "portugal";
let continent = "something";
let population = 30000000;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
*/
/*
let age = 30;
age = 31;

const brithYear = 1991;
//brithYear = 2000;
//const job;

var job = "programmer";
job = "teacher";

//bad idea
lastName = "last name";
console.log(lastName);

const language = "portuguese";
//language = "lool";
*/
/*
//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let population = 30000;
let halfPopulation = population / 2;
console.log(halfPopulation + 1);

const finlandPopulation = 6000000;
const avgCountryPopulation = 33000000;
console.log(population > finlandPopulation);
console.log(population < avgCountryPopulation);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);
*/
/*
//challenge 1
//mass formula
//BMI = mass / height ** 2 = mass / (height * height)

//1. Store Mark's and John's mass and height in variables
const markMassData1 = 78;
const markHeightData1 = 1.69;
const johnMassData1 = 92;
const johnHeightData1 = 1.95;

const markMassData2 = 95;
const markHeightData2 = 1.88;
const johnMassData2 = 85;
const johnHeightData2 = 1.76;

//2. Calculate both their BMIs using the formula (you can even implement both versions)
const markBMIData1 = markMassData1 / markHeightData1 ** 2;
const johnBMIData1 = johnMassData1 / johnHeightData1 ** 2;

const markBMIData2 = markMassData2 / markHeightData2 ** 2;
const johnBMIData2 = johnMassData2 / johnHeightData2 ** 2;

//3. Create a Boolean variable 'markHigherBMI' containing information about
//whether Mark has a higher BMI than John
const markHigherBMIData1 = markBMIData1 > johnBMIData1;
const markHigherBMIData2 = markBMIData2 > johnBMIData2;

console.log(markBMIData1, johnBMIData1, markHigherBMIData1);
console.log(markBMIData2, johnBMIData2, markHigherBMIData2);
*/
/*
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${
  year - birthYear
} years old ${job}!!!!!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("string with \n\
new line \n\
more lina");

console.log(`String
multy
line`);
*/
/*
const description = `Portugal is in Europe, and its 11 million 
people speak portuguese`;

console.log(description);
*/
/*
const age = 15;

if (age >= 18) {
  console.log("sarah can start driving license 👍");
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. wait another ${yearsLeft} years 🤦‍♂️`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//1. If your country's population is greater than 33 million, log a string like this to the 
//console: 'Portugal's population is above average'. Otherwise, log a string like 
//'Portugal's population is 22 million below average' (the 22 is the average of 33 
//minus the country's population)
const portugalPopulation = 30000000000000;
if (portugalPopulation > 33000000) {
  console.log(`Portugal's population is above average`);
} else {
  const populationLeft = 33000000 - portugalPopulation;
  console.log(
    `Portugal's population is ${populationLeft} million below average`
  );
}

//2. After checking the result, change the population temporarily to 13 and then to 
//130. See the different results, and set the population back to original
const portugalPopulation2 = 13000000;
if (portugalPopulation2 > 33000000) {
  console.log(`Portugal's population is above average`);
} else {
  const populationLeft2 = 33000000 - portugalPopulation2;
  console.log(
    `Portugal's population is ${populationLeft2} million below average`
  );
}
*/
/*
//challenge 2
//1. Print a nice output to the console, saying who has the higher BMI. The message
//is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
const markMassData1 = 78;
const markHeightData1 = 1.69;
const johnMassData1 = 92;
const johnHeightData1 = 1.95;

const markMassData2 = 95;
const markHeightData2 = 1.88;
const johnMassData2 = 85;
const johnHeightData2 = 1.76;

const markBMIData1 = markMassData1 / markHeightData1 ** 2;
const johnBMIData1 = johnMassData1 / johnHeightData1 ** 2;

const markBMIData2 = markMassData2 / markHeightData2 ** 2;
const johnBMIData2 = johnMassData2 / johnHeightData2 ** 2;

const markHigherBMIData1 = markBMIData1 > johnBMIData1;
const markHigherBMIData2 = markBMIData2 > johnBMIData2;

if (markHigherBMIData1) {
  console.log(
    `Mark's BMI (${markBMIData1}) is higher than John's (${johnBMIData1})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMIData1}) is higher than Mark's (${markBMIData1})!`
  );
}

if (markHigherBMIData2) {
  console.log(
    `Mark's BMI (${markBMIData2}) is higher than John's (${johnBMIData2})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMIData2}) is higher than Mark's (${markBMIData2})!`
  );
}

//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//BMI (28.3) is higher than John's (23.9)!"
//already done previously, ops
*/
/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23));

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1; // 11 - 1
console.log(n);

//1. Predict the result of these 5 operations without executing them:
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // NaN, was false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
//2. Execute the operations to check if you were right
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("dont spend it all");
} else {
  console.log("you should get a job");
}

let height = 0;
if (height) {
  console.log("high is defined");
} else {
  console.log("height is undefined");
}
*/
/*
const age = "18";
if (age === 18) console.log("you re an adult");
if (age == 18) console.log("you re an adult, loose");

const favourite = Number(prompt("whats ur fav number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("23 is amazing number");
} else if (favourite === 7) {
  console.log("7 is also cool number");
} else if (favourite === 9) {
  console.log("9 is also cool number");
} else {
  console.log("number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("why not 23?");
}

//1. Declare a variable 'numNeighbours' based on a prompt input like this:
//prompt('How many neighbour countries does your country
//have?');
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

//2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
//== for now)
//3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
//is greater than 1
//4. Use an else block to log 'No borders' (this block will be executed when
//'numNeighbours' is 0 or any other value)
//5. Test the code with different values of 'numNeighbours', including 1 and 0
//6. Change == to ===, and test the code again, with the same values of
//'numNeighbours'. Notice what happens when there is exactly 1 border! Why
//is this happening?
//7. Finally, convert 'numNeighbours' to a number, and watch what happens now
//when you input 1
//8. Reflect on why we should use the === operator and type conversion in this
//situation
if (numNeighbours === 1) {
  console.log("only 1 border!");
} else if (numNeighbours > 1) {
  console.log("more than 1 border");
} else {
  console.log("no borders");
}
*/
/*
const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("sarah is able to drive");
} else {
  console.log("someoen else should drive");
}

const isTired = true; //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someoen else should drive");
}
*/

//1. Comment out the previous code so the prompt doesn't get in the way
//2. Let's say Sarah is looking for a new country to live in. She wants to live in a
//country that speaks english, has less than 50 million people and is not an
//island
//3. Write an if statement to help Sarah figure out if your country is right for her.
//You will need to write a condition that accounts for all of Sarah's criteria. Take
//your time with this, and check part of the solution if necessary.
//If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
//not, log 'Portugal does not meet your criteria :(
//5. Probably your country does not meet all the criteria. So go back and temporarily
//change some variables in order to make the condition true (unless you live in
//Canada :D)
/*
isEnglish = true;
people = 10000;
isIsland = true;
if (isEnglish && people < 50000000 && isIsland) {
  console.log("You should live in Portugal");
} else {
  console.log("Portugal does not meet your criteria");
}
*/
/*
//challenge 3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy
//1. Calculate the average score for each team, using the test data below
//data1
const dolphinsData1 = (96 + 108 + 89) / 3;
const koalasData1 = (88 + 91 + 110) / 3;
console.log("data 1 - " + dolphinsData1, koalasData1);

//data bonus 1
const dolphinsDataBonus1 = (97 + 112 + 101) / 3;
const koalasDataBonus1 = (109 + 95 + 123) / 3;
console.log("bonus 1 - " + dolphinsDataBonus1, koalasDataBonus1);

//data bonus 2
const dolphinsDataBonus2 = (97 + 112 + 101) / 3;
const koalasDataBonus2 = (109 + 95 + 106) / 3;
console.log("bonus 2 -" + dolphinsDataBonus2, koalasDataBonus2);
console.log("");

//2. Compare the team's average scores to determine the winner of the competition,
//and print it to the console. Don't forget that there can be a draw, so test for that
//as well (draw means they have the same average score)

if (dolphinsData1 > koalasData1) {
  console.log(`Dolphins ${dolphinsData1} won koalas ${koalasData1}`);
} else if (dolphinsData1 < koalasData1) {
  console.log(`koalas ${koalasData1} won Dolphins ${dolphinsData1}`);
} else if (dolphinsData1 === koalasData1) {
  console.log(`its a draw ${dolphinsData1}`);
}

//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
//team only wins if it has a higher score than the other team, and the same time a
//score of at least 100 points. Hint: Use a logical operator to test for minimum
//score, as well as multiple else-if blocks

if (dolphinsDataBonus1 > koalasDataBonus1 && dolphinsDataBonus1 >= 100) {
  console.log(`dolphins won ${dolphinsDataBonus1}`);
} else if (koalasDataBonus1 > dolphinsDataBonus1 && koalasDataBonus1 >= 100) {
  console.log(`koalas won ${koalasDataBonus1}`);
}

//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
//both teams have the same score and both have a score greater or equal 100
//points. Otherwise, no team wins the trophy

if (dolphinsDataBonus2 > koalasDataBonus2 && dolphinsDataBonus2 >= 100) {
  console.log(`dolphins won ${dolphinsDataBonus2}`);
} else if (koalasDataBonus2 > dolphinsDataBonus2 && koalasDataBonus2 >= 100) {
  console.log(`koalas won ${koalasDataBonus2}`);
} else if (
  dolphinsDataBonus2 === koalasDataBonus2 &&
  dolphinsDataBonus2 >= 100 &&
  koalasDataBonus2 >= 100
) {
  console.log(`its a draw ${koalasDataBonus2}`);
} else {
  console.log("no wins");
}
*/
/*
const day = "friday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("go to conding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enojoy weekend");
    break;
  default:
    console.log("not valid day");
    break;
}

if (day === "monday") {
  console.log("plan course structure");
  console.log("go to conding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enojoy weekend");
} else {
  console.log("not valid day");
}

//1. Use a switch statement to log the following string for the given 'language':
//chinese or mandarin: 'MOST number of native speakers!'
//spanish: '2nd place in number of native speakers'
//english: '3rd place'
//hindi: 'Number 4'
//arabic: '5th most spoken language'
//for all other simply log 'Great language too :D'
const language = "spanish";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("4th place");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}
*/
/*
if (23 > 10) {
  const str = "23 is bigger";
}

//work
console.log(`I'm ${2037 - 1991} years old`);

//no work
console.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
  const str = "23 is bigger";
}}`);
*/
/*
const age = 23;

//? "if" true : "else"
age >= 18
  ? console.log(`i like to dirnk wine`)
  : console.log(`i like to dirnk water`);

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);

//1. If your country's population is greater than 33 million, use the ternary operator
//to log a string like this to the console: 'Portugal's population is above average'.
//Otherwise, simply log 'Portugal's population is below average'. Notice how only
//one word changes between these two sentences
//2. After checking the result, change the population temporarily to 13 and then to
//130. See the different results, and set the population back to origina
population = 20000;
population > 33000000
  ? console.log("Portugal's population is above average")
  : console.log("Portugal's population is below average");
*/
/*
//challenge 4
//Steven wants to build a very simple tip calculator for whenever he goes eating in a
//restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
//300. If the value is different, the tip is 20%
//
//1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
//this. It's not allowed to use an if/else statement � (If it's easier for you, you can
//start with an if/else statement, and then try to convert it to a ternary
//operator!)
//
//2. Print a string to the console containing the bill value, the tip, and the final value
//(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
//316.25”

//Data 1: Test for bill values 275, 40 and 430
let tip = 0;
let bill = 275;

const tipCalculator = bill >= 50 && bill <= 300 ? (tip = 15) : (tip = 20);
console.log(
  `the bill was ${bill}€, the tip was ${
    (tip / 100) * bill
  }€, and the total value ${bill + (tip / 100) * bill}`
);
*/
