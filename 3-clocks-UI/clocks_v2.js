

let clock4Ele = document.getElementById('clock4');
let clock5Ele = document.getElementById('clock5');
let clock6Ele = document.getElementById('clock6');

// clock component
function NewClock(props) {
    let timeZone = props.timeZone
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">
                    {new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}
                </span>
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<NewClock timeZone="Asia/Dubai" />, clock4Ele);
    ReactDOM.render(<NewClock timeZone="Asia/Kolkata" />, clock5Ele);
    ReactDOM.render(<NewClock timeZone="America/New_york" />, clock6Ele);
}, 1000)