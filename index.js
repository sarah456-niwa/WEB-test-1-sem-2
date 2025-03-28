// SECTION C (CODING QUESTIONS)
// 1.) Write a function to reverse a given string.
function reverseString(str) {
        return str.split('').reverse().join('');
    }
    console.log(reverseString("Jesus")); 


// 2.) Implement a function to find the sum of all even numbers in an array.   
function sumOfEvens(arr) {
    return arr.filter(num => num % 2 === 0)
              .reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvens(numbers)); 

// 3.) Create a function that takes two numbers. If the numbers are the same, return their product. If they are different, return their sum.
function checkAndCalculate(number1, number2) {
    if (number1 === number2) {
        return number1 * number2;  
    } else {
        return number1 + number2;  
    }
}

console.log(checkAndCalculate(4, 4));  
console.log(checkAndCalculate(3, 5)); 

// 4.) Write a function that checks if a given word is a palindrome.

function isPalindrome(word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedWord = word.split('').reverse().join('');
    
    return word === reversedWord;
  }
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("hello")); // false
  

    
