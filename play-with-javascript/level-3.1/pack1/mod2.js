
var ajyal = ajyal || {};

(function () {

    ajyal.mod3.doWork();

    var o = {
        doWork() {
            console.log("im mod2");
        }
    }

    ajyal.mod2 = o;

})();