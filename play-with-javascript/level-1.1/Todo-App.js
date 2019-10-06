
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
        let todoToEdit = this.todos.find(todo => todo.id === id);
        todoToEdit.title = newTitle;
    }
    completeTodo(id) {
        let todoToComplete = this.todos.find(todo => todo.id === id);
        todoToComplete.completed = !todoToComplete.completed;
    }
    completeAll() {
        let areAllCompleted = this.todos.every(todo => todo.completed)
        this.todos.forEach(todo => todo.completed = !areAllCompleted);
    }
    deleteTodo(id) {
        let todoIndex = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(todoIndex, 1)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    viewTodos(filter) {
        if (filter === 'ALL') {
            this.todos.forEach((todo) => {
                console.log(todo);
            })
        }
        if (filter === 'ACTIVE') {
            this.todos.filter(todo => !todo.completed)
                .forEach((todo) => {
                    console.log(todo);
                })
        }
        if (filter === 'COMPLETED') {
            this.todos.filter(todo => todo.completed)
                .forEach((todo) => {
                    console.log(todo);
                })
        }
    }
}


const service = new TodoService();

service.addTodo("go home") // 1
service.addTodo("go shop") // 2
service.addTodo("go ???")  // 3

// service.editTodo(3, "go gym")

