console.log("-index.js-");

//----------------------------------------------
// using DOM API
//----------------------------------------------

// var box = document.getElementsByClassName('alert')[0];
// var nextBtn = document.querySelector('.btn-dark');
// var hideBtn = document.querySelector('.btn-danger');
// var showBtn = document.querySelector('.btn-primary');

// nextBtn.addEventListener('click', e => {
//     box.innerHTML = "learn UI tech"
// })
// hideBtn.addEventListener('click', e => {
//     box.style.display = 'none'
// })
// showBtn.addEventListener('click', e => {
//     box.style.display = ''
// })


//----------------------------------------------
// using DOM + XHR ( XML HttpReaquest ) API
//----------------------------------------------

var todosBtn = document.getElementById('todos-btn')
var todosCountListEle = document.getElementById('todos-count-list')
var todosCountInpEle = document.getElementById('todos-count-inp')
todosBtn.addEventListener('click', e => {
    loadAndRenderTodos(5)
})
todosCountListEle.addEventListener('change', e => {
    if (e.target.value)
        loadAndRenderTodos(e.target.value)
})
todosCountInpEle.addEventListener('blur', e => {
    if (e.target.value)
        loadAndRenderTodosV2(e.target.value)
})


function loadAndRenderTodos(count) {
    var xhr = new XMLHttpRequest();
    var url = `https://jsonplaceholder.typicode.com/todos?_limit=${count}`
    xhr.open('GET', url)
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var text = xhr.responseText;
            var todos = JSON.parse(text);
            var liElements = todos.map((todo) => {
                let liEle = `
                    <li class="list-group-item ${todo.completed ? 'bg-info' : ''}">
                        <span class="badge badge-dark">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span class="badge badge-danger">${todo.completed}</span>
                    </li>
                `
                return liEle;
            })
            document.getElementById('progress').innerHTML = ""
            document.getElementById('todos').innerHTML = liElements.join(" ")
        }
    }
    document.getElementById('progress').innerHTML = "loading todos, please wait.."
}




function loadAndRenderTodosV2(count) {
    var url = `https://jsonplaceholder.typicode.com/todos?_limit=${count}`
    let promise = fetch(url);
    promise
        .then(response => response.json())
        .then(todos => {
            var liElements = todos.map((todo) => {
                let liEle = `
                <li class="list-group-item ${todo.completed ? 'bg-info' : ''}">
                    <span class="badge badge-dark">${todo.id}</span>
                    <span>${todo.title}</span>
                    <span class="badge badge-danger">${todo.completed}</span>
                </li>
            `
                return liEle;
            })
            document.getElementById('progress').innerHTML = ""
            document.getElementById('todos').innerHTML = liElements.join(" ")
        });
    document.getElementById('progress').innerHTML = "loading todos, please wait.."
}

//----------------------------------------------
// using DOM + Time API
//----------------------------------------------

let timeEle=document.getElementById('time');
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })
}, 1000);