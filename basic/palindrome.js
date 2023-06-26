const prompt =require("prompt-sync")({sigint:true});
var n=parseInt(prompt("enter a number"));
var nn=n;
var reversed=0;
 while (n != 0) {
       var remainder = (n % 10);
        reversed = (reversed * 10 + remainder);
        n=parseInt(n/10);
}
if( reversed==nn)
  console.log("number is palindrome");
else
console.log("number not is palindrome");
