// **************************** //
// Chapter 7 Exercise 1 
// **************************** //

// 1. Write a string for each case that would satisfy at least one match for the following regular expressions:
//      a.      .abc                          "Labc"
//      b.      a+b?!!1{4}                   "a!!1111"
//      c.      .{3}a\.b                     "LMNa.ba"
//      d.      \w                             "e" 
//      e.      \s                             " "
//      f.      \d                             "9"
//      g.      .                              "L"
//      h.      [abc]                        "abcade"
//      i.      (abc)                        "abcade"
//      j.      [a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}     "nopatoya@hotmail.com"
//      k.      \([0oOn]{1}(_|\s)[0oOn]{1}\)     "(0 0)"

//console.log(/[a-zA-Z]{3,9}\s /.test("(0 0)"));

// **************************** //
// // Chapter 7 Exercise 2
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:
//    A. Dateformat<Month-string><##day>,<####year> a. examples:
//       i. September 29, 1972
//      ii. February 99, 0001
//     iii. June 04,3000

// Answer: [a-zA-Z]{3,9}\s[0-9]{2},\s[0-9]{4}
// console.log(/[a-z]{3,9}\s[0-9]{2},\s[0-9]{4}/i.test("June 04, 3000"));

// ******************************************************** 
//    B. A letter followed OR preceded by a number 
//       a. example
//       i. A52 
//      ii. d747 
//     iii. 27X 
//      iv. v2

// Answer:   ^([a-zA-Z]{1,}\d{1,}|\d{1,}[a-zA-Z])$
// console.log(/^([a-zA-Z]{1,}\d{1,}|\d{1,}[a-zA-Z])$/.test("566D"));

// ********************************************************
//    C. txt, java, and cpp files with names consisting of only letters 
//       a. example
//       i. test.java
//      ii. program.cpp 
//     iii. newReport.txt

// Answer:   [a-zA-Z]{1,}\.(java|cpp|txt){1}
// console.log(/[a-zA-Z]{1,}\.(java|cpp|txt){1}/.test("test.txt"));

// ********************************************************
//    D. A 5 character palindrome 
//       a. example
//       i. abcba 
//      ii. 12321 
//     iii. _1a1_

// Answer:
// let str="_1a1_";
// if (str.length==5){
//     let reg1 = new RegExp(str.split("").reverse().join(""));
//     console.log(reg1.test(str));
// }

// ********************************************************
//    E. All words that consist of letters from b to y only 
//    a. example
//      input: “Bee zapp Crow Eagle Zorro mouse Ape you” 
//      output: [“Bee”,”Crow”,”mouse”,”you”]

// let str="Bee zapp Crow Eagle Zorro mouse Ape you";
// function strings(str){
//     let str1 = str.split(" ");
//     let str2 =[];
//     let reg1 = /[az\W]/i;
//     for (let i=0; i<str1.length; i++){
//         if (reg1.test(str1[i])==false){
//             str2.push(str1[i]);  
//         }
//     }
//     console.log(str2)
//     return str2    
// }
// strings(str)

// ********************************************************
//    F. All the non nested tag elements in a string 
//       a. example
//       input: “Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.”
//       output: <b> 4 < -1/12</b>, <b>answer</b>, <em>surprise</em>


// var reg1 = /<[a-zA-Z]{1,}>[a-zA-Z -<\/+]{1,}<\/[a-zA-Z]{1,}>/g;
// var str = 'Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.';
// let Arr=str.match(reg1);
// console.log(Arr)


// **************************** //
// Chapter 7 Exercise 3
// **************************** //

// ********************************************************
// 3. Write a program that will:
//    A. Shift cyclically every letter of the alphabet by one, and the numbers as well. 
//       a. example
//       i. aBc = bCd
//      ii. xyz = yza
//      iii. aK89=bL90

// abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z"];
// function change(str){
//     let str1 = str.split("");
//     for (let i=0; i<str.length; i++){
//         if (/[\d]/.test(str1[i])==true){             // If the character is a number.
//             if (str1[i]==9){                         // If the number is 9.
//                 str1[i]=0;                           
//             }else{                                   // If the number is not 9 is increased by 1.
//                 str1[i]++;
//             }
//         }else{
//             let ii=0;
//             var ban=0;
//             if (str1[i] === str1[i].toUpperCase()){  // Review if the letter is Uppercase
//                 ban=1;                               // Change the flag for Uppercase
//                 str1[i]=str1[i].toLowerCase();       // Change the Lowercase
//             }
//             while (ii < abc.length) {
//                 if (ii+1==abc.length){
//                     str1[i]=abc[0];
//                     break;
//                 }
//                 if (str1[i]==abc[ii]){              // If the letter coincides
//                     str1[i]=abc[ii+1];              // The letter is replaced for the next letter
//                     break;
//                 }
//                 ii++;
//              } 
//             if (ban==1){                          // Flag that indicates is Uppercase
//                 ban=0;
//                 str1[i]=str1[i].toUpperCase();    // Change the letter againt to Uppercase
//             }
//         }
//     }
//     console.log(str1)
// }
// let str="zBc890";
// change(str)

// ********************************************************
//    B. From a reasonably sized text, have a user defined string be replaced by that 
//       same string with a hashtag. That hashtag should be a link for a twitter search as well.
//       a. example
//           i. String: yolo
//               1. ... should never use #yolo for any reason...


// function hash(text,word){
//     let word1= word;
//     let link= 'https://twitter.com/search/?q=%23'
//     //let word2='#'+ word1 + ' ' + link +word1;
//     let word2='#'+ word1;
//     console.log(text.replaceAll(word1, word2));
//     return text;
// }

// let word='yolo';
// let text= "i_1a1_i labcbal yolo uabcau tabcbat yolo gabcbag";
// hash(text,word)

// ********************************************************
//    C. Using regular expressions, create a function that will match all word palindromes
//       of any size in a text.

// //   Answer:
    //   function palindrome(str){
    //         let text2=str.split(" ");
    //         let= reg1=0;
    //         text3=[];
    //         for (let i=0; i<text2.length; i++){
    //             reg1 = new RegExp(text2[i].split("").reverse().join(""));
    //             if (reg1.test(text2[i])==true){
    //                  text3.push(text2[i]);
    //             }       
    //         }
    //     console.log(text3)
    //     return text3;
    //   }   
    //   let text1="i_1a1_i labcbal uabcau tabcbat gabcbag";
    //   console.log(text1)
    //   palindrome(text1)

// Estimated Time: 8 hour.

