const prompt =require("prompt-sync")({sigint:true});
var n=prompt("enter a number");
var remainder=0;
var O=0,E=0;
var result=0;

while(n!=0)
{
    remainder=n%10;
    result=result+remainder;
    n=parseInt(n/10);
    
}
console.log(`sum of digits is  ${result}`);
