"use strict";
// Check to see if a string has the same amount of 'x's and 'o's. The method must 
// return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
   if (!str) {
    return true;
   } else {
    const result = {};
    str = str.toLowerCase();
    for ( let i of str) {
      if(!result[i]) {
        result[i] = 1;
      } else {
        result[i]++;
      }
    }
    for (let i in result) {
      return result.o === result.x;
    }
   }
}
console.log(XO('ooxx'));






