// **************************** //
// Chapter 07 Exercise 03 - A
// **************************** //

// ********************************************************
// 3. Write a program that will:
//    A. Shift cyclically every letter of the alphabet by one, and the numbers as well. 
//       a. example
//       i. aBc = bCd
//      ii. xyz = yza
//      iii. aK89=bL90

let str='aK89';
str=str.replace(/[0-9a-z]/ig,function(char){
    char=String.fromCharCode(char.charCodeAt(0)+1);
    return char
    }).replace(/:/g, '0').replace(/\[/g, 'A').replace(/{/g, 'a');

console.log(str);

