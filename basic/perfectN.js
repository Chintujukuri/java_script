const prompt =require("prompt-sync")({sigint:true});
var n=parseInt(prompt("enter a number: "));
var result=0;
for(i=1;i<n;i++)
{
    if(n%i==0)
    result=result+i;
}
if(n==result)
console.log(`${i} is a perfect number`);
else 
console.log(`${i} is not a  perfect number`);
