

// liteal object ==> any object , we can ceate without 'new' keywod

//-----------------------------------
// Object
//-----------------------------------

var configObj = new Object();
configObj.url = "http://server/"
configObj.method = "GET"
configObj.onSuccess = function () {
    //..
}
// - or-
var newConfigObj = {
    url: "http://server/",
    method: 'GET',
    onSuccess: function () {

    }
}


//-----------------------------------
// Array
//-----------------------------------

var todayMenu = new Array();
todayMenu.push("veg1")
todayMenu.push("veg2")
todayMenu.push("veg3")
todayMenu.push("non-veg")

// - or -

var newTodayMenu = [
    "veg1", "veg2", "veg3", "non-veg"
]


//-----------------------------------
// RegExp
//-----------------------------------

var mobNumber = "1234567";

var regExp = new RegExp("\\d{7}");
// - or- 
var newRegExp = /\d{7}/

if (regExp.test(mobNumber)) {
    console.log("valid mob number");
} else {
    console.log("invalid mob number");
}