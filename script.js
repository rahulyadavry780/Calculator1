function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }

  function appendToDisplay(value) {
    const display = document.getElementById("display");
  
    // Check if the last character is an operator
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
  
    // If the value is an operator and the last character is also an operator, prevent appending
    if (operators.includes(value) && operators.includes(lastChar)) {
      return;
    }
  
    // Append the value to the display if the check passes
    display.value += value;
  }
  
   