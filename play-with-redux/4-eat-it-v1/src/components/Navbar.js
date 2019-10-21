

import React from 'react'
function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-info">
                <a className="navbar-brand" href="/">{props.title}</a>
            </nav>
        </div>
    )
}
export default Navbar;