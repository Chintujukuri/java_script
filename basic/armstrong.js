const prompt =require("prompt-sync")({sigint:true});
var n=prompt("enter a number");
var o=n;
var remainder=0;
var result=0;
while(n!=0)
{
    remainder=n%10;
   result=result+(remainder**3);
    n =parseInt(n/10);
}
console.log(result);
if(o==result)
 console.log("it is A armstrong number");
 else
 console.log("it is not");