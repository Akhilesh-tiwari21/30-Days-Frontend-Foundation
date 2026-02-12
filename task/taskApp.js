// Collect input field and btn.
const input = document.querySelector('#task');
const btn = document.querySelector('.btn-add');

// Collect lists.
const addList = document.querySelector('.added-list');
const completedList = document.querySelector('.completed-list');
const deletedList = document.querySelector('.deleted-list');


// Create functions
function addToTask() {
    const value = input.value.trim();
    if (!value) return;

    // Create list item
    const list = document.createElement("li");
    list.classList.add('add-list');

    // Create Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create Span
    const span = document.createElement('span');
    span.innerText = value;

    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    // ✅ When task is completed → only text goes
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const completedItem = document.createElement('li');
            completedItem.classList.add('complete-task');
            completedItem.innerText = span.innerText;
            completedList.appendChild(completedItem);

            list.remove();  // remove from Added
        }
    });

    // ✅ Delete → Deleted (TEXT ONLY)
    deleteBtn.addEventListener('click', () => {
        const deletedItem = document.createElement('li');
        deletedItem.classList.add('delete-task');
        deletedItem.innerText = span.innerText;
        deletedList.appendChild(deletedItem);

        list.remove(); // remove from Added
    });


    // First [checkbox,span] append in the list and [list] append the addList
    list.append(checkbox, span, deleteBtn);
    addList.appendChild(list);

    // This line clear the input field
    input.value = '';
};

btn.addEventListener('click', addToTask);
