const prompt =require("prompt-sync")({sigint:true});
var n = parseInt(prompt("Enter a number: "));
var value = 0;

for (var i = 1; i * i <= n; i++) {
  if (n % i === 0 && n / i === i) {
    value = 1;
    break;
  }
}

if (value === 1) 
  console.log(`${n} is a perfect square number.`);
else 
  console.log(`${n} is not a perfect square number.`);

