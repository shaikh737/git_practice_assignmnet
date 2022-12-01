 // problem 1 :- check prime or not 

let number=13

for (let i=1;i<=number;i++)
{
  if(number%i==0)
  {
    count++
  }
}
if(count==1)
{
  console.log("Prime number")
}
else
{
  console.log("Not Prime")
}

// problem 2 :- check  pallindrome or not 

let N=5;

let str="naman";

let bag="";

  for (let i=N-1;i>=0;i--)
{
      bag=bag+str[i];
  }
  if(bag==str)
{
      console.log("Yes");
  }
else
 {
      console.log("No");
  }
}