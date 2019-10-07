
function doTeach() {
    let trainer = "Nag";
    try {
        console.log(trainer + " teaching javascript...");
        //throw new Error("hate javascript.")
        setTimeout(function reactCallback() {
            console.log(trainer + "teaching react.js...");
            //throw new Error("hate react.js.")
            console.log("teaching react.js... ends");
        }, 5000);
        console.log("teaching javascript... ends");
    } catch (e) {
        console.log("trainer caught " + e.message);
    }
}

doTeach();