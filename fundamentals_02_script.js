
"use strict";
/*

//Functions

function logger(age) {
    const totalAge = `My name is Partha and I am ${age} years old.`;
    return totalAge;
}


const age_in_2018 = logger(20);
console.log(age_in_2018);

const age_in_2021 = logger(23);
console.log(age_in_2021);

const age_in_2008 = logger(10);
console.log(age_in_2008);

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Function declaration 

/*
function calcAge1(birthYear) {
    return 2030 - birthYear;
}

const age1 = calcAge1(1998);
console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
    return 2040 - birthYear;

}
const age2 = calcAge2(1998);
console.log(age1, age2);
*/


// Arrow Functions

/*
const calcAge3 = birthYear => 2040 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1987, 'Moon'));
console.log(yearsUntilRetirement(1992, 'Joon'));
console.log(yearsUntilRetirement(1998, 'Partha'));
console.log(yearsUntilRetirement(1999, 'Uddhab'));

*/

// Function Calling other Functions 

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(4, 6));

*/

// Coding Challenge 

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Wins(${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas Wins(${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins the game!');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 100);

//Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

*/

// Introduction to Arrays


/*
const brothers = ['Moon', 'Joon', 'Partha', 'Uddhab'];
console.log(brothers);

//const years = new Array(1987, 1992, 1998, 1999);
console.log(brothers[0]);
console.log(brothers[3]);

console.log(brothers.length);
console.log(brothers[brothers.length - 1]);


const Moon = ['Arun', 'Sarmah', 2021 - 1987, 'Artist', brothers];
console.log(Moon);
console.log(Moon.length);

const Joon = ['Shashanka', 'Sarmah', 2021 - 1992, 'Civil Servent', brothers];
console.log(Joon);
console.log(Joon.length);

const Partha = ['Partha', 'Protim', 'Sarmah', 2021 - 1998, 'Engineer', brothers];
console.log(Partha);
console.log(Partha.length);

const Uddhab = ['Uddhab', 'Sarmah', 2021 - 1999, 'Biologist', brothers];
console.log(Uddhab);
console.log(Uddhab.length);

//Exercise

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const years = [1987, 1992, 1998, 1999];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1])];
calcAge(years[years.length - 1]);
console.log(ages);

*/

// Basic array Operations(Methods)

/*
const brothers = ['Moon', 'Joon', 'Partha'];

//Add elements
const newLength = brothers.push('Uddhab');

console.log(brothers);
console.log(newLength);

brothers.unshift('Rahul');
console.log(brothers);

//Remove elements
brothers.pop();
const poped = brothers.pop();
console.log(brothers);
console.log(poped);

const first = brothers.shift();
console.log(brothers);
console.log(first);

console.log(brothers.indexOf('Joon'));
console.log(brothers.indexOf('Partha'));

console.log(brothers.includes('Joon'));
console.log(brothers.includes('Uddhab'));

if (brothers.includes('Partha')) {
    console.log('You have a brother named Partha');
}

*/

// Coding Challenge 

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips);
console.log(totals);

*/

// Intro to Objects
/*
const parthaArray = [
    'Partha',
    'Protim Sarmah',
    2021 - 1998,
    'Engineer',
    ['Moon', 'Joon', 'Udhhab']
];
console.log(parthaArray);

const partha = {
    firstName: 'Partha',
    lastName: 'Protim Sarmah',
    age: 2021 - 1998,
    job: 'Engineer',
    brothers: ['Moon', 'Joon', 'Uddhab']
};
console.log(partha);
*/

// Dot vs. Bracket notation
/*
const partha = {
    firstName: 'Partha',
    lastName: 'Protim Sarmah',
    age: 2021 - 1998,
    job: 'Engineer',
    brothers: ['Moon', 'Joon', 'Uddhab']
};
console.log(partha);

console.log(partha.lastName);
console.log(partha['lastName']);

const nameKey = 'Name';
console.log(partha['first' + nameKey]);
console.log(partha['last' + nameKey]);

const interestedIn = prompt('What do you want to about Partha ? Choose between firstName, LastName, age, job, and brother');
console.log(partha[interestedIn]);

if (partha[interestedIn]) {
    console.log(partha[interestedIn]);
} else {
    console.log('Wrong Choice!');
}

partha.location = 'Merapani, Golaghat , Assam , India';
partha['Twitter'] = '@parthapSarmah1';
console.log(partha);

//Challenge
/*
console.log(`${partha.firstName} has ${partha.brothers.length} brothers, and his big brother name is ${partha.brothers[0]} and his younger brother name is ${partha.brothers[2]}`);
*/

// Object Methods

/*
const partha = {
    firstName: 'Partha',
    lastName: 'Protim Sarmah',
    birthYear: 1998,
    job: 'Engineer',
    brothers: ['Moon', 'Joon', 'Uddhab'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and  he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`

    }
};

console.log(partha.calcAge());



// console.log(partha['age']());

// Challenge

console.log(partha.getSummary());
*/

// Coding Challenge 

/*
const partha = {
    fullName: 'Partha Protim',
    mass: 58,
    height: 1.80,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const Moon = {
    fullName: 'Moon Arun',
    mass: 68,
    height: 1.75,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

partha.calcBMI();
Moon.calcBMI();

console.log(partha.bmi);
console.log(Moon.bmi);

if (Moon.bmi > partha.bmi) {
    console.log(`${Moon.fullName}'s BMI (${Moon.bmi}) is higher than ${partha.fullName}'s BMI(${partha.bmi})`)

} else if (partha.bmi > Moon.bmi) {
    console.log(`${partha.fullName}'s BMI (${partha.bmi}) is higher than ${Moon.fullName}'s BMI(${Moon.bmi})`)
}

*/


// For Loop

/*
//for loop keeps running while condition is true

for (let rep = 1; rep <= 15; rep++) {
    console.log(`Lifting Wights repetition ${rep}`);
}
*/


// Looping Arrays, breaking and continuing 

/*
const partha = [
    'Partha',
    'Protim Sarmah',
    2021 - 1998,
    'Engineer',
    ['Moon', 'Joon', 'Udhhab'],
    true
];

const types = [];

for (let i = 0; i <= partha.length; i++) {
    console.log(partha[i], typeof partha[i]);

    // Filling types array
    // types[i] = typeof partha[i];
    types.push(typeof partha[i]);

}

console.log(types);

const years = [1987, 1992, 1998, 1999];
const ages = [];

for (let i = 0; i <= years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// Continue and break statement

console.log('-------Only Strings -------')

for (let i = 0; i <= partha.length; i++) {
    if (typeof partha[i] !== 'string') continue;

    console.log(partha[i], typeof partha[i]);
}

console.log('-------Break With Number -------')

for (let i = 0; i <= partha.length; i++) {
    if (typeof partha[i] === 'number') break;

    console.log(partha[i], typeof partha[i]);
}

*/

// Looping Backwards and Loops in Loops 

/*
//Backwards

const partha = [
    'Partha',
    'Protim Sarmah',
    2021 - 1998,
    'Engineer',
    ['Moon', 'Joon', 'Udhhab'],
];

for (let i = partha.length - 1; i >= 0; i--) {

    console.log(i, partha[i]);
}

// Loops in Loops

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting Exercise  ${exercise}`);

    for (let rep = 1; rep < 7; rep++)
        console.log(`Lifting Weight repetition ${rep}`);
}
*/

// The While Loop

/*
// for (let rep = 1; rep <= 15; rep++) {
//     console.log(`Lifting Wights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repitition ${rep}`);
    rep++;

}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You Rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}

*/

// Coding Challenge 

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    // console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
