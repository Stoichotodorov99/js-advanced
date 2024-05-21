let addButtonElement = document.getElementById('Add_Button');
let myBodyElement = document.querySelector('.my_Body');


addButtonElement.addEventListener('click', function () {

    let divContainerElement = document.createElement('div');
    divContainerElement.classList.add('notes');

    let divDividerElement = document.createElement('div');
    divDividerElement.classList.add('divider');

    let inputElement = document.querySelector('.new_Record');

    let pRecordElement = document.createElement('p');
    pRecordElement.textContent = inputElement.value;

    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = '   Delete ';
    deleteButtonElement.classList.add('delete_Button');

    divContainerElement.appendChild(pRecordElement);
    divContainerElement.appendChild(deleteButtonElement);
    divContainerElement.appendChild(divDividerElement);

    myBodyElement.appendChild(divContainerElement);

    inputElement.value = '';

    deleteButtonElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })


})


