//check if script is loading
//console.log("script loaded");

//global variables
let total;

//clears screen to default = 0
function reset() {
  document.getElementById("output").textContent = "0";
  document.getElementById("output").setAttribute("style", "font-size: 4.2rem");
}

//displays values on screen
function display(value) {
  //if ZERO and minus a number (0 - 5 => -5)
  if (document.getElementById("output").textContent === "0" && value === "−") {
    document.getElementById("output").textContent += value;
  }
  //if ZERO and , a number (0,5)
  else if (
    document.getElementById("output").textContent === "0" &&
    value === ","
  ) {
    document.getElementById("output").textContent += value;
  }
  //if ZERO and any operator ( 0 + 5 || 0 x 5 || 0 - 5 || 0 / 5)
  else if (
    (document.getElementById("output").textContent === "0" && value === "÷") ||
    value === "×" ||
    value === "−" ||
    value === "+"
  ) {
    document.getElementById("output").textContent += value;
  }
  //if starts with ZERO = removes it (03 = 3)
  else if (document.getElementById("output").textContent === "0") {
    document.getElementById("output").textContent = document
      .getElementById("output")
      .textContent.replace("0", value);
  }
  //concat
  else {
    document.getElementById("output").textContent += value;
  }
}

//compute basic math operations
function calculate() {
  let replaced;

  //check if contains specific caracters then replace
  //if , and ÷
  if (
    document.getElementById("output").textContent.includes(",") &&
    document.getElementById("output").textContent.includes("÷")
  ) {
    replaced = document
      .getElementById("output")
      .textContent.replace(",", ".")
      .replace("÷", "/");

    total = eval(replaced);
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //if , and x
  else if (
    document.getElementById("output").textContent.includes(",") &&
    document.getElementById("output").textContent.includes("×")
  ) {
    replaced = document
      .getElementById("output")
      .textContent.replace(",", ".")
      .replace("×", "*");

    total = eval(replaced);
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //if , and -
  else if (
    document.getElementById("output").textContent.includes(",") &&
    document.getElementById("output").textContent.includes("−")
  ) {
    replaced = document
      .getElementById("output")
      .textContent.replace(",", ".")
      .replace("−", "-");

    total = eval(replaced);
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //if , and +
  else if (
    document.getElementById("output").textContent.includes(",") &&
    document.getElementById("output").textContent.includes("+")
  ) {
    replaced = document.getElementById("output").textContent.replace(",", ".");

    total = eval(replaced);
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //if ÷
  if (document.getElementById("output").textContent.includes("÷")) {
    //if includes zero at 1st position
    if (document.getElementById("output").textContent.charAt(0).includes("0")) {
      document.getElementById("output").textContent = "Not a number";
      document
        .getElementById("output")
        .setAttribute("style", "font-size: 3rem");
    }
    //else
    else {
      replaced = document
        .getElementById("output")
        .textContent.replace("÷", "/");

      total = eval(replaced);
      document.getElementById("output").textContent = total
        .toString()
        .replace(".", ",");
    }
  }
  //if x
  else if (document.getElementById("output").textContent.includes("×")) {
    replaced = document.getElementById("output").textContent.replace("×", "*");

    total = eval(replaced);
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //if -
  else if (document.getElementById("output").textContent.includes("−")) {
    replaced = document.getElementById("output").textContent.replace("−", "-");

    total = eval(replaced);
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //"if" +
  else {
    total = eval(
      document.getElementById("output").textContent.replace(",", ".")
    );
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
}

//compute percentage
function calculatePercent() {
  let number = document.getElementById("output").textContent;

  //if not ZERO and got ','
  if (number !== "0" && number.includes(",")) {
    number = document.getElementById("output").textContent.replace(",", ".");
    total = number / 100;
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //if not ZERO
  else if (number !== "0") {
    total = number / 100;
    document.getElementById("output").textContent = total
      .toString()
      .replace(".", ",");
  }
  //default
  else {
    document.getElementById("output").textContent = "0";
  }
}

//compute plus and minus
function calculatePlusMinus() {
  let result = document.getElementById("output").textContent;
  let value = Number(document.getElementById("output").textContent);

  //if not zero AND does not include -
  if (
    value !== 0 &&
    !document.getElementById("output").textContent.includes("-")
  ) {
    //if got ,
    if (document.getElementById("output").textContent.includes(",")) {
      value = Number(
        document.getElementById("output").textContent.replace(",", ".")
      );

      result = [
        value.toString().slice(0, 0),
        "-",
        value.toString().slice(0),
      ].join("");

      document.getElementById("output").textContent = result.replace(".", ",");
    }
    //no ,
    else {
      result = [
        value.toString().slice(0, 0),
        "-",
        value.toString().slice(0),
      ].join("");

      document.getElementById("output").textContent = result;
    }
  }
  //if value is negative
  else if (
    value !== 0 &&
    document.getElementById("output").textContent.includes("-")
  ) {
    //if got ,
    if (document.getElementById("output").textContent.includes(",")) {
      document.getElementById("output").textContent = result
        .replace("-", "")
        .replace(".", ",");
    }
    //no ,
    else {
      document.getElementById("output").textContent = result.replace("-", "");
    }
  }
  //if value is zero
  else if (value === 0) {
    document.getElementById("output").textContent = "0";
    alert("Não é possível negar zero!");
  }
}

//draw circle - receives line colour value, fill value and element id
function drawCircle(lineValue, fillValue, elementId) {
  let canvas = document.getElementById(elementId);
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let X = canvas.width / 2;
    let Y = canvas.height / 2;
    let R = 6.5;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = lineValue;
    ctx.fillStyle = fillValue;
    ctx.fill();
    ctx.stroke();
  }
}
