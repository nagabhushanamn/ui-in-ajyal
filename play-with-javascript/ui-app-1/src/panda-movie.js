

export function startMovie() {
    //---------------------------------------------
    // using DOM + Timer API
    //---------------------------------------------

    let startBtn = document.getElementById('start-btn');
    let stopBtn = document.getElementById('stop-btn');
    let pandaImgEle = document.getElementById('panda-img');
    stopBtn.disabled = true;
    startBtn.addEventListener('click', e => {
        stopBtn.disabled = false;
        startBtn.disabled = true;
        let idx = 0;
        let interval = setInterval(() => {
            idx++
            pandaImgEle.src = `images/${idx}.jpeg`;
            if (idx === 4) {
                idx = 0;
            }
        }, 1000);
        stopBtn.addEventListener('click', e => {
            clearInterval(interval);
            stopBtn.disabled = true;
            startBtn.disabled = false;
        })
    })
}