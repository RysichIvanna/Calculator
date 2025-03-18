document.addEventListener("DOMContentLoaded", function () {
    const calc = document.forms["calc"];
    const display = calc["txt"];
    const buttons = document.querySelectorAll(".num");

    function isValidExpression(expression) {
        return /^[\d+\-*/().\s]*$/.test(expression);
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = this.innerText;

            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                const expression = display.value.trim();

                if (isValidExpression(expression)) {
                    try {
                        display.value = new Function('return ' + expression)();
                    } catch {
                        display.value = "Error";
                    }
                } else {
                    display.value = "Invalid Expression";
                }
            } else {
                display.value += value;
            }
        });
    });
});
