const todoListNode = document.querySelector('.todo-list');
const addBtnNode = document.querySelector('.input__btn-add');
const inputFieldNode = document.querySelector('.input__input-field');

addBtnNode.addEventListener('click', () => {
    createHthlCod();
});

const createHthlCod = function () {
    let inputFieldText = '';
    inputFieldText += inputFieldNode.value;

    const taskTag = document.createElement('div');
    taskTag.className = 'task';
    todoListNode.appendChild(taskTag);

    const buttonDeleteTag = document.createElement('button');
    buttonDeleteTag.className = 'task__btn-delete';
    buttonDeleteTag.innerText = 'Delete';
    taskTag.appendChild(buttonDeleteTag);

    const buttonDoneTag = document.createElement('button');
    buttonDoneTag.className = 'task__btn-done';
    buttonDoneTag.innerText = 'Done';
    taskTag.appendChild(buttonDoneTag);

    const paragraphTag = document.createElement('p');
    paragraphTag.className = 'task__text';
    paragraphTag.innerText = inputFieldText;
    taskTag.appendChild(paragraphTag);

    inputFieldNode.value = '';

    buttonDeleteTag.addEventListener('click', () => {
        todoListNode.removeChild(taskTag, buttonDeleteTag, buttonDoneTag, paragraphTag);
        
    });

    buttonDoneTag.addEventListener('click', () => {
        const classP = 'task__text-cross-out';
        const classPCrossOut = 'task__text';
        if (paragraphTag.classList.value == classPCrossOut) {
            paragraphTag.classList.remove(classPCrossOut);
            paragraphTag.classList.add(classP);
        } else {
            paragraphTag.classList.remove(classP);
            paragraphTag.classList.add(classPCrossOut);
        };
    });
};
