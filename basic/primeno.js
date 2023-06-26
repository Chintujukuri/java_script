const prompt =require("prompt-sync")({sigint:true});
var n=parseInt(prompt("enter a number"));

for(var i=1;i<=n;i++)
{
  var value=1;
  for ( var j=2;j<=i/2;j++)
  {
    if(i%j==0)
    {
        value=0;
        break;
    }
  }
  if(value==1 && i>1)
  {
    console.log(i);
    
  }
}