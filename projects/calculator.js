// calculator.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.action;

            if (value === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (value === 'equals') {
                try {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.value = currentInput;
                    operator = '';
                    previousInput = '';
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(value)) {
                if (operator && previousInput) {
                    try {
                        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    } catch (error) {
                        display.value = 'Error';
                        currentInput = '';
                    }
                }
                previousInput = currentInput;
                operator = value === 'add' ? '+' : value === 'subtract' ? '-' : value === 'multiply' ? '*' : '/';
                currentInput = '';
                display.value = '';
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
