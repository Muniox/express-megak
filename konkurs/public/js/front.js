const sendTaskInput = document.querySelector('#sendTask');
const itemList = document.querySelector('#itemList');
const counter = document.querySelector('#counter');
const checkbox = document.querySelectorAll('input[class="toggle"]');
let closeTask = document.querySelectorAll('.destroy');

//create new task and send all information to backend about created task
//@TODO należy stworzyć add event listener do każdego tworzonego elementu: https://stackoverflow.com/questions/50624631/event-listener-doesnt-work-after-adding-a-new-element
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

        //create element for append-------------------------
        const newItem = document.createElement("li");
        //div
        const div = document.createElement("div");
        div.classList.add('view');
        //input checkbox
        const input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        input.setAttribute("data-id", `${data.id}`);
        input.classList.add('toggle');
        input.addEventListener( 'click', async (event) => {

        const response = await fetch(`/completed/${input.dataset.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        });
            
        const data = await response.json();
        if (data.toggle) {
        //toggle check on li item
        input.parentElement.parentElement.classList.toggle("completed");
        !input.checked;
        } else {
            event.stopPropagation();
        }

        //count how many items are checked/done
        counter.textContent = document.querySelectorAll('input[type="checkbox"]:checked').length.toString();
        });
        //label
        const label = document.createElement('label');
        label.textContent = `${data.content}`;
        //button x
        const button = document.createElement('Button');
        button.setAttribute("data-id",`${data.id}`);
        button.classList.add('destroy');
        button.addEventListener('click', async () => {
        const id = button.dataset.id;
        console.log(id);
        const response = await fetch(`/delete/${id}`, {
            method: 'DELETE',
            headers: {
                    'Content-Type': 'application/json'
            },
        });
    const data = await response.json();
    if (data) {
        button.parentElement.parentElement.remove();
    }
});
        //inputEdit
        const inputEdit = document.createElement('input');
        inputEdit.classList.add('edit');
        inputEdit.setAttribute("value", `${data.content}`);

        newItem.appendChild(div);
        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(button);
        newItem.appendChild(inputEdit);
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

//delete with Flag
closeTask.forEach(el =>
    el.addEventListener('click', async () => {
        const id = el.dataset.id;
        console.log(id);
        const response = await fetch(`/delete/${id}`, {
            method: 'DELETE',
            headers: {
                    'Content-Type': 'application/json'
            },
        });
    const data = await response.json();
    if (data) {
        el.parentElement.parentElement.remove();
    }
}));


