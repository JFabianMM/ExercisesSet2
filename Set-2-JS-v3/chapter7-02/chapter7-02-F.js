// **************************** //
// Chapter 07 Exercise 02 - F
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    F. All the non nested tag elements in a string 
//       a. example
//       input: “Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.”
//       output: <b> 4 >< -1/12</b>, <b>answ>er</b>, <em>surprise</em>


var str = 'Is <b>4 (<>?(-1/12</b> true? The <e>answer</e> will <em>surprise</em> you';

let arr=str.match(/<([a-z]+)>[a-z0-9.\s¡¿&(){}*%#@\[\]><\/\-\?]+\1>/ig);
console.log(arr)
