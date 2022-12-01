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