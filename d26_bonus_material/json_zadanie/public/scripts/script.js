const btn = document.querySelector('button');


btn.addEventListener('click', async () => {
    const response = await fetch('/post', {
        method: 'POST',
        body: JSON.stringify({name: 'Adam'}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    document.body.textContent = data.name;
});