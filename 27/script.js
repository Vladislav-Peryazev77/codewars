"use strict";
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
function isIsogram(str){
  const obj = {};
  for (let elem of str.toLowerCase()) {
    if (!obj[elem]) {
      obj[elem] = 1;
    } else {
      obj[elem]++;
    }
  }
  return Object.values(obj).every(item => item <= 1);
}







