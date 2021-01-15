// Iteration #1: Find the maximum
function maxOfTwoNumbers (num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findLongestWord(arr) {
  if (arr.length == 0) {
    return null;
  }

  let longest = "" ;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i]
    }
   }
   return longest
  }
// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numberArr){
  if(numberArr.length === 0) {
    return 0;
  }
  let sum = 0 ;
  for (i = 0 ; i < numberArr.length ; i ++) {
    sum = sum + numberArr[i] ;
  }
  return sum ;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  function averageNumbers (arr) {
    let sum = 0 ;
    if (arr.length === 0) {
      return null;
    } 
    
  for (i = 0 ; i < arr.length ; i ++) {
    sum = sum + arr[i] ;
  }
  sum = sum/arr.length;
  return sum;
}
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
 function averageWordLength (arr) {
   let average = 0;
   if (arr.length === 0) {
     return null;
   }
   for(let i = 0; i < arr.length; i++) {
     average = average + arr[i].length;
   }
 average = average/arr.length
  return average;
 }
// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
function uniquifyArray (arr) {
  let uniqueArr = [];
  if (arr.length === 0) {
    return null;
  }

  for(let i = 0; i < arr.length; i++) {
    if(!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]) 
    }

  }
   return uniqueArr;
}
// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(arr, findWord) {
  if(arr.length === 0) {
    return null;
  } 
  for(i = 0; i < arr.length; i++) {
   if(arr[i] === findWord) {
     return true;
   } 
  }
   return false;
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimes(arr, findWord) {
  if(arr.length === 0) {
    return 0;
  } 
  let count = 0;
  for(i = 0; i < arr.length; i++) {
   if(arr[i] === findWord) {
     count++;
   }
  }
  return count;
}