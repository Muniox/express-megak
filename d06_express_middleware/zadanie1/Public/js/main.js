const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const checkButton = document.getElementById('check-button');

const table = document.createElement('table');
table.innerHTML = "        <tr>\n" +
                  "            <th colspan=\"4\" >Oddane głosy:</th>\n" +
                  "        </tr>\n" +
                  "        <tr>\n" +
                  "            <td>YES</td>\n" +
                  "            <td id=\"yes-counter\"></td>\n" +
                  "            <td>NO</td>\n" +
                  "            <td id=\"no-counter\"></td>\n" +
                  "        </tr>\n" +
                  "        <tr colspan=\"4\">\n" +
                  "            <td>razem: </td>\n" +
                  "        </tr>";

yesButton.addEventListener('click', async () => {
   const response = await fetch('http://localhost:3000/vote/yes', {method: 'PUT'});
   const data = await response.json();
   alert(data.message);
});

noButton.addEventListener('click', async () => {
   const response = await fetch('http://localhost:3000/vote/no', {method: 'PUT'});
   const data = await response.json();
   alert(data.message);
});

checkButton.addEventListener('click', async () => {
   const response = await fetch('http://localhost:3000/vote/check', {method: 'GET'});
   const data = await response.json();
   const newData = JSON.parse(data);
   document.body.appendChild(table);
   const yesCounter = document.getElementById('yes-counter');
   const noCounter = document.getElementById('no-counter');
   yesCounter.textContent = newData.yes;
   noCounter.textContent = newData.no;
});

