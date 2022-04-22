//FUNCTION FOR SUM OF TWO NUMBERS

function SumofTwoNumbers(a,b); //intializing function

{
 let result=a+b;    //addition of the two numbers;
console.log("The Sum is" + result);//Displays the sum
  
}

let a= parsFloat(Prompt("Enter The First Number: ")) //taking the first input from the user
let b= parseFloat(Prompt("Enter The Second Number:")) //taking the second input from the user

let Sum= SumofTwoNumbers();
return;

//SUM OF NUMBERS BETWEEN 1-10
let sum=0;
for (var i=1; i<=10;i++)
{
  sum=+i;
}
console.log(sum);
