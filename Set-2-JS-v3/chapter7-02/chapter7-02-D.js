// **************************** //
// Chapter 07 Exercise 02 - D
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    D. A 5 character palindrome 
//       a. example
//       i. abcba 
//      ii. 12?21 
//     iii. _1a1_

var palindrome=function(str){ 
    let str1=str + ' '+ str.split("").reverse().join("")+ ' ';  
    var matches = str1.match(/([a-zA-Z0-9\)\?!\/@#\$%\^\&*+=._-]+\s)\1/); // The back reference
    if (matches){    
         return true
     }else{
         return false
     }}

str='/.../';    
console.log(palindrome(str))  