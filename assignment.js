 // problem 1 :- check prime or not 

let number=13

for (let i=1;i<=number;i++)
{
  if(number%i==0)
  {
    count++
  }
}
if(count==2)
{
  console.log("Prime number")
}
else
{
  console.log("Not Prime")
}

