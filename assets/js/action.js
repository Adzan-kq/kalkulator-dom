function simpanData(e) {
   let number1 = parseInt(document.getElementById("number1").value);
   let number2 = parseInt(document.getElementById("number2").value);

   let result;
   let operator = e.target.textContent;

   switch (operator) {
      case "+":
         result = number1 + number2;
         break;
      case "-":
         result = number1 - number2;
         break;
      case "*":
         result = number1 * number2;
         break;
      case "/":
         result = number1 / number2;
         break;
      default:
         result = "Error: Operator tidak dikenali";
   }

   document.getElementById("answer").textContent = result;
}

function resetData() {
   document.getElementById("answer").textContent = "0";
   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";
   alert("Data Berhasil Di Reset")
}