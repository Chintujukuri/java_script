const prompt =require("prompt-sync")({sigint:true});
var p=parseInt(prompt("enter a number"));
var value=1;
  for(var i=2;i<=p/2;i++)
  {
    if(p%i==0)
    {
      value=0;
      break;
    }
  }
 
 if (!value==1 || p==1)
        console.log("It is a  not prime number");
 else 
        console.log("It is a prime number");
      