const prompt =require("prompt-sync")({sigint:true});
var n=prompt("enter a number");
var remainder=0;
var O=0,E=0;

while(n!=0)
{
    remainder=n%10;
    n=parseInt(n/10);
    if(remainder%2==0)
        E=E+remainder;
    else
       O=O+remainder;
}
console.log(`sum of even numbers${E}`);
console.log(`sum of odd numbers${O}`);