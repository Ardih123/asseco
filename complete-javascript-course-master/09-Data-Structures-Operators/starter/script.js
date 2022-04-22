'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //es6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
/*
//console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}
*/

/*
//challange 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//Write a program that receives a list of variable names written in underscore_case
//and convert them to camelCase.
//The input will come from a textarea inserted into the DOM (see code below to
//insert the elements), and conversion will happen when the button is pressed.

//Test data (pasted to textarea, including spaces):
//underscore_case
//first_name
//Some_Variable
// calculate_AGE
//delayed_departure

document.querySelector('button').addEventListener('click', onClick);
function onClick() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    //console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
}
*/

/*
//split and join
console.log('a+very+nice+string'.split('+'));
console.log('jonas schmedtmann'.split(' '));

const [fristName, lastName] = 'jonas schmedtmann'.split(' ');
const newName = ['Mr.', fristName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas scmedtamnn');

//padding
const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2342348723487234));
console.log(maskCreditCard('34345345345345345345'));

//repeat
const message2 = 'bad weather.... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
//string part 2
const airline = 'tap air portugal';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//comparing email
const email = 'hello@jones.io';
const loginEmail = '   Hello@Jonas.Io';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'all passengers come to barding door 23. boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boing'));
console.log(plane.startsWith('a'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the new airbus family');
}

//exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you re NOT allowed on board');
  } else {
    console.log('welcome aboard');
  }
};

checkBaggage('i have a laptop, some Food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('got some snacks and a gun for protectoin');
*/

/*
//strings part 1
const airline = 'tap air portugal';
const plane = 'a320';

console.log(plane[0]);
console.log('b737'[0]);
console.log(airline.length);
console.log('b737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //be and e are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got mddle seat');
  } else {
    console.log('you got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

/*
//challenge 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
//console.log(gameEvents);

//1. Create an array 'events' of the different game events that happened (no
//duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64
//was unfair. So remove this event from the game events log
gameEvents.delete(64);
console.log(gameEvents);

//3. Compute and log the following string to the console: "An event happened, on
//average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4. Loop over 'gameEvents' and log each element to the console, marking
//whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽ GOAL
for (const [values, name] of gameEvents) {
  if (values < 45) {
    console.log(`[FIRST HALF] ${values}: ${name}`);
  } else {
    console.log(`[SECOND HALF] ${values}: ${name}`);
  }
}
*/

/*
//maps iteration
const question = new Map([
  ['question', 'what is the best programing language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quizz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}
//const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
//maps
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze, italy');
rest.set(2, 'lisbon, portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we re open')
  .set(false, 'we re closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
//console.log(rest);

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

console.log(rest.get(arr));
*/

/*
//sets
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risoto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);

console.log(new Set('jonas'));
console.log(new Set());

console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('risoto');
console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('joajsdojweojrweor').size);
*/

/*
//challenge 2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")
const properties = Object.keys(game.scored);
const values = Object.values(game.scored);
const entries = game.scored.entries();

for (const [goals, player] of entries) {
  console.log(`Goal ${goals + 1}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already
//studied how to calculate averages, you can go check if you don't remember)
const oddsEntries = Object.entries(game.odds);
//console.log(odds);

let avgOdds = 0;
for (const [name, value] of oddsEntries) {
  avgOdds += value;
}
avgOdds /= oddsEntries.length;
console.log('avg odds = ' + avgOdds);

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them
//(except for "draw"). Hint: Note how the odds and the game objects have the
//same property names
const oddValues = Object.values(game.odds);
//console.log(oddValues);
const gameKeys = Object.keys(game);
//console.log(gameKeys);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odd}`);
}

//4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
//console.log(game.scored);
console.log(scorers);
*/

/*
//property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We re open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}
*/

/*
//optinal chainning
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

//arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
console.log(users[2]?.name ?? 'user array empty');
*/

/*
const menu = [...restaurant.starterMenu, restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//console.log([...menu.entries()]);
*/

/*
//challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. Create one player array for each team (variables 'players1' and
//'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//2. The first player in any player array is the goalkeeper and the others are field
//players. For Bayern Munich (team 1) create one variable ('gk') with the
//goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
//field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22
//players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
//new array ('players1Final') containing all the original team1 players plus
//'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called
//'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player
//names (not an array) and prints each of them to the console, along with the
//number of goals that were scored in total (number of player names passed in)

//Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
//Then, call the function again with players from game.scored
function printGoals(...players) {
  console.log(`goals: ${players.length}, names: ${players}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which
//team is more likely to win, without using an if/else statement or the ternary
//operator.
team1 < team2 && console.log('team1 most likely to win');
team1 > team2 && console.log('team2 most likely to win');
*/

/*
const rest1 = {
  name: 'capri',
  //numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'la piazza',
  owner: 'giovanni rossi',
};

// or assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish assigment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// and assigment operator
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
/*
//nullish coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish values - null and undefined ( not 0 or "")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/*
//short circuting
console.log('----------- OR --------------');
// use any data type, return any data type, short circuting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'helo' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----------- AND --------------');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('onions', 'cheese');
*/
/*
//1 destructuring
// spread because on right side of =
const arr = [1, 2, ...[3, 4]];

//rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//2 functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(8, 5, 1, 4, 7, 1);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives');
restaurant.orderPizza('mushrooms');
*/
/*
// the spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 3, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables: arrays, string, map, sets. not objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} schdtmann`)

const ingredients = [
  // prompt(`lets make parta! ingrediente 1?`),
  // prompt(`lets make parta! ingrediente 2?`),
  // prompt(`lets make parta!ingrediente 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ristorante roma';
console.log(restaurantCopy.name, restaurant.name);
*/
/*
//destructuring objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
//destructing arrays
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, , secondary] = [secondary, , main];
console.log(main, secondary);

//receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructor
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
