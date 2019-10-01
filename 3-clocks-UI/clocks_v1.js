
let clock1Ele = document.getElementById('clock1');
let clock2Ele = document.getElementById('clock2');
let clock3Ele = document.getElementById('clock3');

// clock component
function Clock(props) {
    let timeZone=props.timeZone
    return `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <span class="badge badge-dark">
                    ${new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}
                </span>
            <div>
        </div>
        `
}
setInterval(() => {
    clock1Ele.innerHTML = Clock({ timeZone: 'Asia/Dubai' });
    clock2Ele.innerHTML = Clock({ timeZone: 'Asia/Kolkata' });
    clock3Ele.innerHTML = Clock({ timeZone: 'America/New_york' });
}, 1000)