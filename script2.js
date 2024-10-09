let todos = [];

function AddTodo()
{
    todos.push({
        
        title: document.querySelector("input").value
    })
    render(); 
}

function deletelasttodo()
{
    //removes the last element from the array
    //first argument -> index
    //second argument -> number of elements to delete
    todos.splice(todos.length - 1, 1);
    render();
}

function deletetodo(todo)
{
    console.log(todo);
}

function createTodoComponenet(todo)
{
    const divEl = document.createElement("div");

    const h2El = document.createElement("h2");
    const buttonEl = document.createElement("button");

    //divEl.setAttribute("id", index);

    buttonEl.innerHTML = "Delete";
    buttonEl.onclick = deletetodo(todo);
    h2El.innerHTML = todo.title;
    

    divEl.append(h2El);
    divEl.append(buttonEl);
    return divEl;
}
//when a  user function calls this function it will take the state 
//and update the dom
function render()
{
    document.querySelector("#todos").innerHTML = "";
    for(let i = 0; i < todos.length; i++)
    {
        const element = createTodoComponenet(todos[i]);
        document.querySelector("#todos").appendChild(element);
    }
}



