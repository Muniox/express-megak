const sendTaskInput = document.querySelector('#sendTask');
const itemList = document.querySelector('#itemList');
const counter = document.querySelector('#counter');
const checkbox = document.querySelectorAll('input[class="toggle"]');


//create new task and send all information to backend about created task
sendTaskInput.addEventListener('keypress', async (event) => {
    if (event.key === "Enter") {
        const response = await fetch('/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: sendTaskInput.value})
        });
        const data = await response.json();
        const newItem = document.createElement("li");
        newItem.innerHTML =`
                                <div class="view">
                                    <input class="toggle" data-id="${data.id}" type="checkbox">
                                    <label>${data.content}</label>
                                    <button class="destroy"></button>
                                </div>
                                <input class="edit" value="${data.content}>
            `;
        itemList.appendChild(newItem);
    }
});

//count how many items are checked/done
counter.textContent = document.querySelectorAll('input[type="checkbox"]:checked').length.toString();

checkbox.forEach(el => el.addEventListener( 'click', async (event) => {



    const response = await fetch(`/completed/${el.dataset.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    );
    const data = await response.json();
    if (data.toggle) {
        //toggle check on li item
        el.parentElement.parentElement.classList.toggle("completed");
        !el.checked;
    } else {
        event.stopPropagation();
    }

    //count how many items are checked/done
    counter.textContent = document.querySelectorAll('input[type="checkbox"]:checked').length.toString();
}));




