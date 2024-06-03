document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.keys button');

    keys.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;
            if (value === '=') {
                display.value = eval(display.value);
            } else if (value === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(value);
            }
        });
    });

    display.addEventListener('keydown', function (event) {
        const key = event.key;
        if (/^\d$|^\.$/.test(key) || '+-*/'.includes(key)) {
            event.preventDefault();
            appendToDisplay(key);
        } else if (key === 'Enter') {
            event.preventDefault();
            display.value = eval(display.value);
        } else if (key === 'Escape') {
            event.preventDefault();
            clearDisplay();
        }
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }
});
