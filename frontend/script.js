
const createNewTaks = async (taskName) => {
    // Task 1 (storing in backend)
    return 1; // replace this with the actual task id
}

const getTasks = async () => {
    // Task 2 (retriving)
    return [
        {
            id: 1,
            taskName: 'Task 1',
            isCompleted: true,
        },
    ]; // replace this with the actual data
}


const deleteTask = async (taskId) => {
    // Task 3 (deleting)
}


const markTaskAsCompleted = async (taskId) => {
    // Task 4 (updating)
}

const updateUI = async (taskText, taskId, isCompleted) => {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async () => {
        await deleteTask(taskId);
        taskList.removeChild(listItem);
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    if(isCompleted) {
        listItem.classList.add('completed');
    }
    completeButton.addEventListener('click', async () => {
        await markTaskAsCompleted(taskId);
        listItem.classList.toggle('completed');
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    newTaskInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', async () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskId = await createNewTaks(taskText);
            updateUI(taskText, taskId);
        }
    });

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});

getTasks().then((tasks) => {
    tasks.forEach(task => {
        updateUI(task.taskName, task.id, task.isCompleted);
    });
});