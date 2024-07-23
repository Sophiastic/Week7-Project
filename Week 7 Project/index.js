//Coding Steps: All questions should be printed to your Browser's console using console.log()
// CODE BELOW:
//this is for the first part using this array:
console.log(
  "Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."
);
const ages = [3, 9, 23, 64, 2, 8, 93];
console.log(ages);
console.log(
  " Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed!"
);
let lastArr = ages[ages.length - 1];
let subtractAges = lastArr - ages[0];
console.log(subtractAges);
//--------------------------------------------------------------------//
//this is pt. 2 using this array
console.log(
  "Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)."
);
ages[ages.length - 1] = 34;
lastArr = ages[ages.length - 1];
subtractAges = lastArr - ages[0];
console.log(subtractAges);
//---------------------------------------------------------------//
//this is pt. 3 using this array
console.log(
  "Use a loop to iterate through the array and calculate the average age."
);
function averages(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const average = sum / array.length;
  console.log(average);
  return average;
}
averages(ages);
//second array of assignment
console.log(
  "Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'"
);
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
//------------------------------------------------------------------//
//second part w this array
console.log(
  "Use a loop to iterate through the array and calculate the average number of letters per name."
);
function letterAverage(names) {
  let amountOfLetters = 0;
  let amountOfNames = 0;

  for (let i = 0; i < names.length; i++) {
    amountOfLetters += names[i].length;
    amountOfNames++;
  }
  return amountOfLetters / amountOfNames;
}
console.log(letterAverage(names));
//----------------------------------------------------------//
//third part of using this arrray
console.log(
  "Use a loop to iterate through the array again and concatenate all the names together, separated by spaces."
);
//let namesTogether = names.join(" ");
//console.log(namesTogether);
let namesTogether = " ";
for (let i = 0; i < names.length; i++) {
  namesTogether += names[i] + " ";
}
console.log(namesTogether);
//--------------------------------------------//
console.log("How do you access the last element of any array?");
console.log("Name of the array .length - 1. EX: names.length-1");
//----------------------------------------------------------------//
console.log("How do you access the first element of any array?");
console.log("The first element is identified by using [0].");
//---------------------------------------------------------------//

//SOPHIA COME BACK TO THIS ONE
console.log(
  "Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."
);
function addingAll(array) {
  //const nameLengths = [];
  let sum = 0;
  //this is the standard set up of a loop, everything is being declared and then the manipulator is at the end.
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const nameLengths = [3, 5, 3, 5, 4, 3];
console.log(nameLengths + " " + names);
//For example:
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

console.log(
  "Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array."
);
let sumOfNameLengths = 0;
//this is the standard set up of a loop, everything is being declared and then the manipulator is at the end.
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(sum);

//--------------------------------------------------------------------//
console.log(
  "Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')."
);
let firstOne = (word, n) => {
  let result = "";
  //this is the standard set up of a loop, everything is being declared and then the manipulator is at the end.
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
};
console.log(firstOne("Hello", 3));

console.log(
  "Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space."
);
let fullName = (firstName, lastName) => firstName + " " + lastName;
console.log(fullName("Sophia", "Chuc"));
//-----------------------------------------------------------------------//
//REWATCH MENTOR VID FOR THIS ONE//
console.log(
  "Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."
);
let numberArray = [43, 84, 92];
console.log(addingAll(numberArray) > 100);

//-------------------------------------------------------------------//
console.log(
  "Write a function that takes an array of numbers and returns the average of all the elements in the array."
);
let newArray = [34, 87, 98];
averages(newArray);

console.log(
  "Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array."
);

function compareAverages(arrayA, arrayB) {
  const averageA = averages(arrayA);
  const averageB = averages(arrayB);
  return averageA > averageB;
}
let arrayA = [432113, 654, 7653];
let arrayB = [543, 67, 43];
console.log(compareAverages(arrayA, arrayB));

console.log(
  "Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50."
);
function willBuyDrink(isHotOutside, moneyInPocket) {
  if ((isHotOutside = true && moneyInPocket >= 10.5)) {
    //this is the first outcome depending on the assignments
    return true;
  } else {
    //this is the second
    return false;
  }
}
//my assingments to the variables
let isHotOutside = true;
let moneyInPocket = 11;
console.log(willBuyDrink(isHotOutside, moneyInPocket));

console.log(
  "Create a function of your own that solves a problem. In comments, write what the function does and why you created it."
);

//Should I rollerskate tomorrow?
//This is going to let me know depending on the weather.
function shouldI(itsNotSmokey, itsRaining) {
  if (itsNotSmokey === true && itsRaining === false) {
    return console.log("Go rollerskating!!!");
  } else {
    return console.log("Stay inside dude.");
  }
}
let itsNotSmokey = true;
let itsRaining = false;

console.log(shouldI(itsNotSmokey, itsRaining));
