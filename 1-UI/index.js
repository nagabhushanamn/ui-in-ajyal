console.log("-index.js-");

//----------------------------------------------
// using DOM API
//----------------------------------------------

var box = document.getElementsByClassName('alert')[0];
var nextBtn = document.querySelector('.btn');

nextBtn.addEventListener('click', e => {
    box.innerHTML = "learn UI tech"
})

