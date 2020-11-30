let displayValue = 0;
let total = 0;
let add = false;
let sub = false;
let mul = false;
let div = false;
let num = false;


function  display(numValue)
{
  if (add == false && sub == false && mul == false && div == false && num == false)
    displayValue = 0;
  num = true;
  if (sub == false)
    displayValue = displayValue * 10 + parseFloat(numValue)
  else
    displayValue = displayValue * 10 - parseFloat(numValue)
  document.getElementById("display").value = displayValue;
  if (add == false && sub == false && mul == false && div == false)
    total = displayValue;
}

function  flagsToFalse()
{
  add = false;
  sub = false;
  mul = false;
  div = false;
  num = false;
}

function  operations(operator)
{
  if ((add == true || sub == true || mul == true || div == true) && num == true)
    equal();
  if (!(operator == "-" && (mul == true || div == true)))
    flagsToFalse();
  if (operator == "+")
    add = true;
  else if (operator == "-")
    sub = true;
  else if (operator == "*")
    mul = true;
  else if (operator == "/")
    div = true;
  num = false;
  displayValue = 0;
}

function  equal()
{
  if (mul == true)
    total *= displayValue;
  else if (div == true)
    total /= displayValue;
  else if (add == true || sub == true)
    total += displayValue;
  sub = false;
  displayValue = 0;
  display(total);
  flagsToFalse();
}

function  clearculator()
{
  flagsToFalse();
  displayValue = 0;
  total = 0;
  display(total);
}

function  initialize()
{
  document.getElementById("display").value = parseFloat("0");
  let numButton = document.getElementsByClassName("number");
  for (let i = 0; i < numButton.length; i++)
  {
    numButton[i].addEventListener("click", function()
    {
      display(this.value);
    }, false);
  }
  let operButton = document.getElementsByClassName("operator");
  for (let j = 0; j < operButton.length; j++)
  {
    operButton[j].addEventListener("click", function()
    {
      operations(this.value);
    },false)
  }
  let clearButton = document.getElementsByClassName("clear");
  clearButton[0].addEventListener("click", clearculator, false)
}

window.addEventListener("load", initialize, false);
