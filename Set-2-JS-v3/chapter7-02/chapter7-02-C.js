// **************************** //
// Chapter 07 Exercise 02 - C
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    C. txt, java, and cpp files with names consisting of only letters 
//       a. example
//       i. test.java
//      ii. program.cpp 
//     iii. newReport.txt

// Answer:   ^([a-zA-Z]+\.(java|cpp|txt))$
console.log(/^([a-zA-Z]+\.(java|cpp|txt))$/.test("test.cpp"));


