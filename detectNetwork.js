// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var cardNumberArray = cardNumber.split('');
  var twoDigitIdentifier = Number(cardNumberArray[0] + cardNumberArray[1]);
  var oneDigitIdentifier = Number(cardNumberArray[0]);

  
  if ([38, 39].includes(twoDigitIdentifier)) && [14].includes(cardNumberArray.length) {
    return "Diner's Club";
  } else if ([34, 37].includes(twoDigitIdentifier)) && [15].includes(cardNumberArray.length) {
    return "American Express";
  } else if ([51, 52, 53, 54, 55].includes(twoDigitIdentifier)) && [16].includes(cardNumberArray.length) {
    return "MasterCard";
  } else if ([4].includes(oneDigitIdentifier) && [13, 16, 19].includes(cardNumberArray.length)) {
  	return "Visa";
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
}


var assertEqual = function(actual, expected, testName) {
  if (actual === expected) {
    return 'passed';
  } else {
    return 'failed ' + testName +', expected ' + expected + ' but got ' + actual;
  }
}

// test cases:
// var test1 = assertEqual(detectNetwork('343456789012345'), 'American Express', 'checks to see if credit card number is in American express or Diners club');
// var test2 = assertEqual(detectNetwork('38345678901234'), "Diner's Club", 'checks to see if credit card number is in American express or Diners club');
// var test3 = assertEqual(detectNetwork('39345678901234'), "Diner's Club", 'checks to see if credit card number is in American express or Diners club');
// var test4 = assertEqual(detectNetwork('343456789012345'), 'American Express', 'checks to see if credit card number is in American express or Diners club');
// var test5 = assertEqual(detectNetwork('373456789012345'), 'American Express', 'checks to see if credit card number is in American express or Diners club');

// console.log(test1);
// console.log(test2);
// console.log(test3);
// console.log(test4);
// console.log(test5);



