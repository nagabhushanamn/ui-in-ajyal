console.log("-index.js-");

//----------------------------------------------
// using DOM API
//----------------------------------------------

var box = document.getElementsByClassName('alert')[0];
var nextBtn = document.querySelector('.btn-dark');
var hideBtn = document.querySelector('.btn-danger');
var showBtn = document.querySelector('.btn-primary');

nextBtn.addEventListener('click', e => {
    box.innerHTML = "learn UI tech"
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})








//----------------------------------------------
// using DOM + XHR ( XML HttpReaquest ) API
//----------------------------------------------

var todosBtn = document.getElementById('todos-btn')
todosBtn.addEventListener('click', e => {

    var xhr = new XMLHttpRequest();
    var url = `https://jsonplaceholder.typicode.com/todos?_limit=${5}`
    xhr.open('GET', url)
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var text = xhr.responseText;
            var todos = JSON.parse(text);
            var liElements = todos.map((todo) => {
                let liEle = `
                    <li class="list-group-item ${todo.completed?'bg-info':''}">
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


})