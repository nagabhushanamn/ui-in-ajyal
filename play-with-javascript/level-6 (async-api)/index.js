

// Promise API  - async


//--------------------------------
// worker
//--------------------------------

let worker1 = {
    getCoffee: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("worker1 resolving promise...");
                resolve("CAPI")

                // console.log("worker1 rejecting promise...");
                // reject("No Milk")

            }, 2000)
        });
        return promise;
    }
}


let worker2 = {
    getIdly: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("worker2 resolving promise...");
                resolve("Idly")

                // console.log("worker2 rejecting promise...");
                // reject("No Idly , u r in UAE")

            }, 5000)
        });
        return promise;
    }
}


//--------------------------------
// trainer
//--------------------------------

let trainer = {
    doTeach: function () {
        console.log("tnr teaching...");
        console.log("tnr requesting worker, to get coffee..");
        let promise1 = worker1.getCoffee();//  async / non-blocking
        let promise2 = worker2.getIdly();//  async / non-blocking
        console.log('tnr got promise , defer actions to futrue')
        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2])
            .then(
                result => console.log("yummy " + result),
                //error => console.log("oops " + error)
            )
            .catch(error => console.log("oops " + error + " , i wont to go office"))
        console.log('tnr cont.. further teaching...')
    }
}

// trainer.doTeach();


//------------------------------------------

// Es7  // async-await
async function doWork() {
    let coffee = await worker1.getCoffee()
    console.log("yummy " + coffee)
}

doWork();
