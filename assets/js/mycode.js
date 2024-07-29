function Hello() {
  var l1 = document.getElementById("l1");
  l1.innerHTML = "salam";
}

// document.write("saaalaaammm")
function sum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var res = num1 + num2;
  var output = document.getElementById("res");
  output.innerHTML = res;
  console.log("salaaaam")
}

sum();
