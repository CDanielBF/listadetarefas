document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

 
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
             <div class="check">
                        <input type="checkbox" class="task-checkbox" >
                    </div>
                    <span class="task-text">${taskText}</span>
                    <button class="edit-button"><img src="./assets/edit.png" class="img-but"></button>
                    <button class="remove-button" style> <img src="./assets/delete.png" class="img-but"> </button>
                    
                </div>
                `;
            taskList.appendChild(li);

    
        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

   
        const editButton = li.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            const taskTextElement = li.querySelector('.task-text');
            const currentText = taskTextElement.textContent;
            const newText = prompt('Editar tarefa:', currentText);
            if (newText !== null && newText.trim() !== '') {
                taskTextElement.textContent = newText.trim();
            }
        });

        
        const removeButton = li.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
