document.addEventListener("DOMContentLoaded", function () {
    const calc = document.forms["calc"];
    const display = calc["txt"];
    const buttons = document.querySelectorAll(".num");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = this.innerText;
  
        if (value === "C") {
          display.value = "";
        } else if (value === "=") {
          try {
            display.value = eval(display.value);
          } catch {
            display.value = "Error";
          }
        } else {
          display.value += value;
        }
      });
    });
  });
  