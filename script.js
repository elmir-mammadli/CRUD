window.addEventListener('load', function () {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    let elementsList = document.querySelector('#tasks')

    form.addEventListener('submit',
        function (stopSend) {
            stopSend.preventDefault();

            const task = input.value

            if (!task) {
                alert('Please fill out the task');
                return;
            }

            const taskElement = document.createElement('div');
            taskElement.classList.add('task');

            const taskContentElement = document.createElement('div')
            taskContentElement.classList.add('content');

            taskElement.appendChild(taskContentElement);

            const taskElementNumber = document.createElement('span')
            taskElementNumber.classList.add('numberSpan')
            taskElementNumber.innerText = elementsList.childElementCount+1+'.';


            taskContentElement.appendChild(taskElementNumber)



            const taskInputElement = document.createElement('input')
            taskInputElement.type = 'text'
            taskInputElement.classList.add('text')
            taskInputElement.value = task
            taskInputElement.setAttribute('readonly', 'readonly')

            taskContentElement.appendChild(taskInputElement)


            const taskActionsElement = document.createElement('div')
            taskActionsElement.classList.add('actions')

            const taskEditElement = document.createElement('button')
            taskEditElement.classList.add('edit')
            taskEditElement.innerHTML = "Edit"

            const taskDeleteElement = document.createElement('button')
            taskDeleteElement.classList.add('delete')
            taskDeleteElement.innerHTML = "Delete"

            taskActionsElement.appendChild(taskEditElement)
            taskActionsElement.appendChild(taskDeleteElement)

            taskElement.appendChild(taskActionsElement)

            elementsList.appendChild(taskElement);

            input.value = "";

            taskEditElement.addEventListener('click', function () {
                if (taskEditElement.innerText.toLowerCase() == "edit") {
                    taskInputElement.removeAttribute('readonly')
                    taskEditElement.innerText = "Save"
                } else {
                    taskInputElement.setAttribute('readonly', 'readonly')
                    taskEditElement.innerText = "Edit"
                }


            })



            taskDeleteElement.addEventListener('click', function () {
                elementsList.removeChild(taskElement)
            })

        })
})

