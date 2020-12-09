import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import './index.css';


ReactDom.render(<App />, document.getElementById('root'));

// const AppList = () => {
//     const items = ['items 1', 'items 2', 'items 3', 'items 4'];
//     const firstItem = <li>Item 0</li>;
//     const isAuth = true;
//
//     return (
//         <ul>
//             {isAuth ? firstItem : null}
//             {items.map(item => <li>(items)</li>)}
//             <li>{items[0]}</li>
//             <li>{items[1]}</li>
//         </ul>
//     );
// }

// const AppHeader = () => {
//     // const margin = 20;
//     // const headerStyle = {
//     //     color: 'red',
//     //     marginLeft: `${margin}px`,
//     //     marginBottom: `${margin}px`,
//     // };
//
//     return (
//         <h1 /*style={headerStyle*/ className='header'>Hello World</h1>
//     );
// }

// const AppInput = () => {
//     const placeholder = 'Type text...';
//
//     return (
//         <label htmlFor='search'>
//             <input id='search' placeholder={placeholder}/>
//         </label>
//     );
// }

// const el = React.createElement(
//     'h1',
//     null,
//     'hello world'
// )

// const el = (
    // <div>
    //     <h1>Hello World</h1>
    //     <ul>
    //         <li>My first list</li>
    //         <li>My second list</li>
    //     </ul>
    // </div>
// )



