const prompt =require("prompt-sync")({sigint:true});
var n=parseInt(prompt("enter a number"));
var fib1=0;
var fib2=1;
var result=0;
 console.log(fib1);
 console.log(fib2);
for(var i=2;i<n;i++)
{
    result=fib1+fib2;
    fib1=fib2;
    fib2=result;
     console.log(result);
}