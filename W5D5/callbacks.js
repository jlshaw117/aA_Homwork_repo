window.setTimeout(function () {
  alert('HAMMER TIME!');
}, 5000);

function hammerTime (time) {
  window.setTimeout( () => {
    alert(`${time} is hammer time!`);
  });
}


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuts () {
  let firstAns;
  let secondAns;

  reader.question("Do you want tea?", (res) => {
    firstAns = res;
    console.log(`You replied ${res}`);
  });

  reader.question("Do you want biscuts?", (res) => {
    firstAns = res;
    console.log(`You replied ${res}`);
  });

  let teaRes = (firstAns === `yes`) ? `do` : `don't`;
  let biscutRes = (secondAns === `yes`) ? `do` : `don't`;

  console.log(`So you ${teaRes} want tea and you ${biscutRes} biscuts.`);
}

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

// Method style

Noodles.chase(Markov);

Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
