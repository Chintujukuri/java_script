const prompt =require("prompt-sync")({sigint:true});
var f=prompt("enter a number: ");
var factorial=1;
for (i=f;i>0;i--)
{
    factorial=factorial*i;
}
console.log(`factorial of ${f} is ${factorial}`);