import React, { useContext } from 'react'

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};



const ThemeContext = React.createContext(themes.light);



function ContextApp() {
    return (
        <ThemeContext.Provider value={themes.light}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}


// function ThemedButton() {
//     return (
//         <ThemeContext.Consumer>
//             {value => {
//                 let theme=value;
//                 return (
//                     <button style={{ background: theme.background, color: theme.foreground }}>
//                         I am styled by theme context!
//                     </button>
//                 )
//             }}
//         </ThemeContext.Consumer>

//     );
// }


function ThemedButton() {
    let theme = useContext(ThemeContext)
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}


export default ContextApp;