const numberAInput  = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');

form.addEventListener('submit', async (event) =>{
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);

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
    const data = await response.json();
    console.log(data);
});