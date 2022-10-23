"use strict";
let val1 = 0;
let val2 = 0;
let action = "";
let result = 0;

function add() {
  val1 = +document.getElementById("num").value;
  action = "+";
}

function min() {
  val1 = +document.getElementById("num").value;
  action = "-";
}

function mult() {
  val1 = +document.getElementById("num").value;
  action = "*";
}

function div() {
  val1 = +document.getElementById("num").value;
  action = "/";
}

function calc() {
  val2 = +document.getElementById("num").value;
  //   if (action == "+") {
  //     result = val1 + val2;
  //     document.getElementById("num").value = result;
  //   }
  //   let expr = val1 + action + val2;
  let expr = "";
  switch (action) {
    case "+":
      expr = val1 + action + val2;
      let res = eval(expr);
      document.getElementById("num").value = res;
      break;
    case "-":
      expr = val1 + action + val2;
      let res1 = eval(expr);
      document.getElementById("num").value = res1;
      case "x":
      expr = val1 + action + val2;
      let res2 = eval(expr);
      document.getElementById("num").value = res2;
      break;
      case "/":
      expr = val1 + action + val2;
      let res3 = eval(expr);
      document.getElementById("num").value = res3;
  }
}
