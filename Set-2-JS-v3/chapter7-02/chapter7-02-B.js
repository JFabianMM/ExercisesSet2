// **************************** //
// Chapter 07 Exercise 02 - B
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:
// ******************************************************** 
//    B. A letter followed OR preceded by a number 
//       a. example
//       i. A52 
//      ii. d747 
//     iii. 27X 
//      iv. v2

// Answer:   ^([a-zA-Z]+\d+|\d+[a-zA-Z])$
console.log(/^([a-zA-Z]+\d+|\d+[a-zA-Z])$/.test("D887"));


