// **************************** //
// Chapter 07 Exercise 02 - D
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    D. A 5 character palindrome 
//       a. example
//       i. abcba 
//      ii. 12321 
//     iii. _1a1_

var palindrome=function(str){
    //********************************/
    // I added this section code due to the back reference doesn't accept some special charactters at the begining, so
    // I could not manipulate the spetial characters at the beginnig of the strings . Adding this part is not correct
    // I understand that its tricky but I utilize this in order to utilizen the back reference line (line 30). 

    let str1=str;
    let str2= str1.split("");
    if (str2[0]==str2[str2.length-1]){
        str2[0]='a';                
        str2[str2.length-1]='a';
        str2=str2.join("");
    }else{str2=str2.join("");}
    let str3=str2 + ' '+ str2.split("").reverse().join("");  
    //********************************/
    var matches = str3.match(/(\b([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{5})\b)(?=.*\b\1\b)/g); // The back reference

    if (matches){    
        return 'Is a palindrome'
    }else{
        return 'Is NOT a palindrome'
    }
}

str='/.../';
console.log(palindrome(str))
