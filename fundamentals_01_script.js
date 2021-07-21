//


let js = 'amazing';
console.log(40 + 60 - 20 + 10);

let firstName = "Partha";
console.log(firstName);

let secondName = "Protim";
console.log(secondName);

let lastName = "Sarmah";
console.log(lastName);

let PI = 3.1415;
console.log(PI);


//Data types


true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 24);
console.log(typeof 'Partha');

javascriptIsFun = 'NO!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);


//let ,const.,var

let age = 30;
age = 31;
console.log(age);

const birthYear = 1998;
console.log(birthYear);

var job = "Programmer";
job = "Teacher";
console.log(job);


// Basic Operators 

const curr_year = 2040;
const agePartha = curr_year - 1998;
const ageMoon = curr_year - 1987;
console.log(agePartha, ageMoon);

console.log(ageMoon * 2, ageMoon / 10, 2 ** 4);

const firstName = 'Partha';
const lastName = 'Sarmah';
console.log(firstName + ' ' + lastName);

let x = 10 + 90;
x += 100;
x *= 10;
x++;
console.log(x);

// comparision operators

console.log(ageMoon > agePartha);
console.log(agePartha >= 18);

console.log(curr_year - 1987 > curr_year - 1998);



// operator precedance


const curr_year = 2040;
const agePartha = curr_year - 1998;
const ageMoon = curr_year - 1987;
console.log(curr_year - 1987 > curr_year - 1998);

console.log(5 - 10 - 25);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMoon + agePartha) / 2;
console.log(ageMoon, agePartha, averageAge);



const markMass = 78;
const markHeight = 1.69;

const BMImark = markMass / markHeight ** 2;
console.log(BMImark);

const jhonMass = 92;
const jhonHeight = 1.95;

const BMIjhon = jhonMass / jhonHeight ** 2;
console.log(BMIjhon);

const BMImarkHigher = BMImark > BMIjhon;
console.log(BMImarkHigher);


// String and Template Literals


const firstName = 'Partha';
const job = 'Engineer';
const birthYear = 1998;
const year = 2025;
const place = 'India';

const parthaNew = `I'am ${firstName}, a ${year - birthYear} years old ${job} from ${place}.`;
console.log(parthaNew);

console.log(`Just a String......!`);
console.log(' String \n\ partha');
console.log(`String
multiple
lines`);

// Decision taking : If / Else statements 

age = 20;
const isOldenough = age >= 18;
if (isOldenough) {
    console.log(`Moon is elogible for his driving liscence.`);
}
else {
    console.log(`Moon is not eligible for his driving liscence!`);
}

// type conversion



const inputYear = '1998';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Partha'));
console.log(String(50));


//type coercion

console.log('I am ' + 23 + ' years old.!');
console.log('23' - '10' - 3);
console.log('23' * 3);
console.log('23' ** 3);
console.log('23' / 3);
console.log('23' > 3);

let n = '1' + 1;
n = n - 1;
console.log(n);


//Truthy and Falsy values


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Partha'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 110;
if (money) {
    console.log("Don't Spend it all!");
} else {
    console.log('You should get a job');
}


let height = '1.6 meter';
if (height) {
    console.log("Height is defined!!");
} else {
    console.log("Height is not defined!!");
}



//Equality Operators



const age = 18;
if (age === 18) console.log('You just became an adult!');

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 20) {
    console.log('Great! 20 is a great number!');
} else if (favourite === 10) {
    console.log('Awesome! 10 is a awesome number!');
} else {
    console.log('Number is not 20 or 10!');
}


//Logical Operators 


const hasDriversLicense = true; // Variable A
const hasGoodVision = true; // Variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to Drive!');
} else {
    console.log('Someone else should Drive!');
}

const isTired = true; // true
console.log(hasGoodVision || hasDriversLicense || isTired);
console.log(hasGoodVision && hasDriversLicense && isTired);

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to Drive!');
} else {
    console.log('Someone else should Drive!');
}


//Coding Challenge 
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both teams win the trophy');
} else {
    console.log('No one wins the trophy!');
}

//Switch Statement

const day = prompt('Enter your day :');
switch (day) {
    case 'monday':
        console.log('Plan Course Structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Go for freinds meetup');
        break;
    case 'wednesday':
        console.log('Fishing');
        break;
    case 'thursday':
        console.log('family dinner');
        break;
    case 'friday':
        console.log('date with girlfriend');
        break;
    case 'saturday':
        console.log('No plans');
        break;
    case 'sunday':
        console.log('House Cleaning');
        break;
    default:
        console.log('Not a valid day');

}

// Conditional Operator (Ternary )
























