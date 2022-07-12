const numberAInput  = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

function setResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.border = `1px solid ${color}`;
}

form.addEventListener('submit', async (event) =>{
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);


    setResult('Loading...', 'transparent');


    const response = await fetch('/calc/check', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            numberA,
            numberB
        })
    });
    const {divider} = await response.json();

        setResult(divider ? 'Number B is divider of number A.' : 'Number B is not divider of number A.',
            divider ? 'green': 'red');
});