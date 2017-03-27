//This tells the variable  to point at the HTML element
var num1input = document.getElementById("num1input");
var selectinput = document.getElementById("selectinput");
var num2input = document.getElementById("num2input");
var buttoninput = document.getElementById("buttoninput");
var display = document.getElementById("display");

//
buttoninput.addEventListener("click", function() {
 //
 var num1 = +num1input.value
 var select = selectinput.value
 var num2 = +num2input.value

 // These if statements are here to tell the selector which operator its going to be used for the num1 input and num2 input in order to calucate the answer.
 if (select === "Addition") {
  display.innerHTML = num1 + num2;
 }
 
 if(select ==="Subtraction"){
  display.innerHTML = num1 - num2;
 }
 
 if(select ==="Multiplication"){
  display.innerHTML = num1 * num2;
 }
  if(select ==="Division"){
  display.innerHTML = num1 / num2;
  }
  
   if(select ==="Modules"){
  display.innerHTML = num1 % num2;
  }
  
   if(select ==="PowerOf"){
  display.innerHTML =  Math.pow(num1,num2);
  }

});
