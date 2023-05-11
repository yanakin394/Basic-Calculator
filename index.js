const inputA = document.querySelector('.calc__input-a');
const inputB = document.querySelector('.calc__input-b');
const calcSelector = document.querySelector('.calc__selector');
const button = document.querySelector('.calc__btn');
const output = document.querySelector('.calc__output');

button.addEventListener('click', () => {
    const a = +inputA.value;
    const b = +inputB.value;
    const operation = calcSelector.value;

    const result = calculate({
        a,
        b,
        operation
    });

    output.innerHTML = result;
});