const prompt =require("prompt-sync")({sigint:true});
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed)
}
var str=prompt("enter a string: ");
console.log(isPalindrome(str)); 

