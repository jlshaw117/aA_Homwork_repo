// Write a method that returns the factors of a number in ascending order.

function factors(num) {
  let fact = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      fact.push(i);
    }
  }
  return fact;
}

Array.prototype.rotate = function (num = 1) {
  let shift = num % this.length;
  let begin = this.slice(shift);
  let end = this.slice(0, shift);
  return begin.concat(end);
}

// Write a method that translates a sentence into pig latin. You may want a helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'

function pigLatinify(sentence) {
  let result = [];
  let words = sentence.split(" ");
  words.forEach((word) => {
    result.push(translateWord(word));
  });
  return result.join(" ");
}

function translateWord(word) {
  let vowels = ['a','e','i','o','u'];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i]) && (word[i] === 'u')) {
      continue;
    } else if (vowels.includes(word[i])) {
      return word.slice(i) + word.slice(0, i) + 'ay';
    }
  }
}

// Write a String#symmetric_substrings method that returns an array of substrings
// that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
// Only include substrings of length > 1.

String.prototype.symmetricSubstrings = function () {
  let result = [];
  for (let i = 0; i < this.length - 2; i++) {
    for (let j = i + 2; j <= this.length; j++) {
      if (this.slice(i, j).isPalindrome) {
        result.push(this.slice(i,j));
      }
    }
  }
  return result;
};

String.prototype.isPalindrome = function () {
  let rev = this.split("").reverse().join("");
  return rev === this.toString();
};

Array.prototype.reject = function (func) {

}

// Write a method that doubles each element in an array

function doubler(array) {

}
