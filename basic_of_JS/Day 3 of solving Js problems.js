//Write a JavaScript program that displays the largest integer among two integers.
{
  let a = 10;
  let b = 20;

  if (a > b) {
    console.log(a);
  }
  else {
    console.log(b);
  }

}

/* Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -  */
{
  let x = 3;
  let y = -7;
  let z = 2;

  let A = x*y*z;

  if (A > 0)
  {
    console.log("+");
  }
  else{
    console.log("The sign is -");
  //  alert("The sign is -"); is not working in replit using console.log instead
  }

}

/* 
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/
{
  let x = [0, -1, 4];

  for(let i=x.length; i>=0; i--){
    if(x[i] > x[i-1]){
      let temp = x[i-1];
      x[i-1] = x[i];
      x[i] = temp;
    }
  }
  
  console.log(x);
  // alert is not working in replit using console.log instead
}
