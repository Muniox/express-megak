const button = document.getElementById('get-json');


button.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/a', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        alert(data.message);
        document.body.textContent = data.message;
    } catch (e) {
        console.error(e);
    }
});
