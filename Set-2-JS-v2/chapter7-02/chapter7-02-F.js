// **************************** //
// Chapter 07 Exercise 02 - F
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    F. All the non nested tag elements in a string 
//       a. example
//       input: “Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.”
//       output: <b> 4 < -1/12</b>, <b>answer</b>, <em>surprise</em>

// I see that the exercise says NON nested tags, however the example output present the nested tags information.

// The regExp I created presents the result exactly as the example output 

var reg1 = /<[a-z]+>[a-z -<\/+]+<\/[a-z]+>/ig;
var str = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
let Arr=str.match(reg1);
console.log(Arr)




