

var ajyal = ajyal || {};

(function () {

    ajyal.mod2.doWork();

    var o = {
        doWork() {
            console.log("im mod1");
        }
    }

    ajyal.mod1 = o; // export

})();