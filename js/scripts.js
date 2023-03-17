
alert('Do you want to know what is my favorite food?')
let favoriteFood='Canelones';
document.write(favoriteFood);

let escapedText="He said: \"Yes!\", that's for sure.";
let escapedText2 = 'He said: "Yes!", that\'s for sure.';
document.write(escapedText);
document.write(escapedText2);

let annesAge=27;
let anne = {
    name: 'Anne',
    age: annesAge,
    child: {
        name: 'Joe',
        age: 2
    }
};

let shortObject = { name: 'Bob' };
let emptyObject = {};

let user={};
user.email='test@test.com';
user.age='27';

let currentUserName = 'sam';

let userAges = {
  anne: 27,
  sam: 112,
  megan: 97
};

userAges[currentUserName] = 113;
console.log(userAges[currentUserName]);

let userAges = [27, 112, 87];

// array of strings
let foodArray = ['pizza', 'tuna', 'apple'];

// array of objects
let carArray = [
  { type: 'Bus', wheels: 4, color: 'blue'},
  { type: 'Sport', wheels: 4, color: 'red'}
];

// array of arrays
let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];