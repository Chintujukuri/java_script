const prompt =require("prompt-sync")({sigint:true});
var a=parseInt(prompt("enter the first number: "));
 
var b= parseInt(prompt("enter the second number: "));
  /*  a=a+b;
      b=a-b;
      a=a-b; */

  /*  a=a*b;
      b=(a/b);
      a=(a/b);  */

  //  a=a+b-(b=a);

    a^=b;
    b^=a;
    a^=b;

console.log(` after the swaping a is ${a} and b is ${b}`);