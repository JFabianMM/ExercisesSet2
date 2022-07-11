    
const addBotton = document.getElementById("addBotton");          
addBotton.addEventListener("click", () => addLink());

const textElement = document.getElementById("text");  
const originalString= textElement.textContent;
var string;

const wordreplacedElement = document.getElementById("wordreplaced"); 
wordreplacedElement.placeholder = "Write here the word to convert in a Hyperlink";

function addLink() {
  var wordreplaced=wordreplacedElement.value;
  var wordutilized='#'+ wordreplaced;
  let link= 'https://twitter.com/search/?q=%23'+ wordreplaced;
  if (wordreplaced && wordutilized){
      if (wordreplaced != 'yolo'){
        let re = new RegExp(`\\b${wordreplaced}\\b`, 'gi');
        string = originalString.replace(re, `<a href="${link}">${wordutilized}</a>`); 
        textElement.innerHTML=`${string}`;
      }   
  }
}


