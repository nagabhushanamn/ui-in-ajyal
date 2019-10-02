
//--------------------------------------------
// Todo => {id,title,completed}
//--------------------------------------------
class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;

//--------------------------------------------
// Todo-service
//--------------------------------------------

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos.push(newTodo);
    }
    editTodo(id, newTitle) {
        //..
    }
    completeTodo(id) {
        //..
    }
    completeAll() {
        //..
    }
    deleteTodo(id) {
        //..
    }
    clearCompleted() {
        //..
    }
    viewTodos(filter) {
        if (filter === 'ALL') {
            this.todos.forEach(function (todo) {
                console.log(todo);
            })
        }
    }
}


const service = new TodoService();