// **************************** //
// Chapter 07 Exercise 02 - A 
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:
//    A. Dateformat<Month-string><##day>,<####year> a. examples:
//       i. September 29, 1972
//      ii. February 99, 0001
//     iii. June 04,3000


// Answer: /(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{2},\s?[0-9]{4}/i
console.log(/(January|February|March|April|May|June|July|August|September|October|November|December)\s[0-9]{2},\s?[0-9]{4}/i.test("October 04,3009"));


