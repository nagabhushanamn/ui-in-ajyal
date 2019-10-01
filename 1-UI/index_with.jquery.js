// ---------------------------------
    // DOM manupulation with jquery
// ---------------------------------

var box=$('.alert');
var hideBtn=$('.btn-danger')
var showBtn=$('.btn-primary')
var nextBtn=$('.btn-dark')

nextBtn.click(e=>{
    box.text('learn UI tech')
})
hideBtn.click(e=>{
    box.hide()
})
showBtn.click(e=>{
    box.show()
})
