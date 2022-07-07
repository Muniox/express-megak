const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const button = document.getElementById('sendButton');

button.addEventListener('click', async () => {
     const A = firstNumber.value;
     const B = secondNumber.value;
     if (firstNumber.value === '' || secondNumber.value === ''){
         alert('podaj liczbę');
     } else {
        const response = await fetch('http://localhost:3000/', {
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             method: "POST",
             body: JSON.stringify({'A': A, 'B': B})
         });
        const data = await response.json();
        alert(data.message);
     }
});
