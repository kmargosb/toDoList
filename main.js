// Variables

const $addBtn = document.querySelector('.add-btn');
const $todo = document.querySelector('.todo');
const $todoList = document.querySelector('.todo-list');
const $process = document.querySelector('.process');
const $finished = document.querySelector('.finished');


// Functions

$addBtn.addEventListener('click', function(){
    // console.log("click asfasf")

    let processContent = document.createElement('div');
    processContent.classList.add('process-content');

    let task = document.createElement('li');
    task.classList.add('process-li');
    task.innerText = `${todo.value}`
    processContent.appendChild(task);

    let readyBtn = document.createElement("button");
    readyBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    readyBtn.classList.add("ready-btn");
    processContent.appendChild(readyBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.classList.add("delete-btn");
    processContent.appendChild(deleteBtn);


    if(todo.value === ""){
        alert('please enter a task')
    }else{
        $process.appendChild(processContent);
    }

    todo.value = ""

    const $liTask = document.querySelector('.process-li').innerText;   


    readyBtn.addEventListener('click', function(e){
        // console.log("funciona de verdadddd")

        let finishContent = document.createElement('div');
        finishContent.classList.add('finish-content');

        let transferir = readyBtn.parentElement.innerText

        let finishTask = document.createElement('li');
        finishTask.innerText = transferir
        finishContent.appendChild(finishTask);

        if($liTask){
            $finished.appendChild(finishContent);
        }

        let target = e.target;
        target.parentElement.parentElement.remove();
    })

    deleteBtn.addEventListener('click', function(e){

        let target = e.target;
        target.parentElement.parentElement.remove();

    })

})