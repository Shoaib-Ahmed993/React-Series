import React from 'react'

// With JSX
// const Hello = () =>{
//     return(
//         <div className='Hello'>
//             <h1>Hello Shoaib</h1>
//         </div>
//     )
// }

// Without JSX
const Hello = ()=>{
    return(
        React.createElement('div', {className: 'Hello'}, React.createElement('h1', null, 'Hello Shoaib'))
    )
}

export default Hello;