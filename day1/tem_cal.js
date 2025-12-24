function convertToF() {
  let c = document.getElementById("celsius").value;
  let f = (c * 9/5) + 32;
  document.getElementById("fahrenheitResult").innerText =
    "Fahrenheit: " + f;
}

function convertToC() {
  let f = document.getElementById("fahrenheit").value;
  let c = (f - 32) * 5/9;
  document.getElementById("celsiusResult").innerText =
    "Celsius: " + c;
}