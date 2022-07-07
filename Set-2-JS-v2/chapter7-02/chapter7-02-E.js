// **************************** //
// Chapter 07 Exercise 02 - E
// **************************** //

// ********************************************************
// 2. Write a regular expression that can match:

// ********************************************************
//    E. All words that consist of letters from b to y only 
//    a. example
//      input: “Bee zapp Crow Eagle Zorro mouse Ape you” 
//      output: [“Bee”,”Crow”,”mouse”,”you”]

//Answer = /\b([bcdefghijklmnñopqrstuvwxy]+)\b/ig
console.log('Bee zapp Crow Eagle Zorro mouse Ape you'.match(/\b([bcdefghijklmnñopqrstuvwxy]+)\b/ig)) 



