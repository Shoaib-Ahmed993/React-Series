
// Simple Function
// function Greet(){
//     return(
//         <h1>Shoaib Ahmed</h1>
//     )
// }

// Arrow Function
export const Greet = (props) => {
    // console.log(props)
    return(
        <div>
            <h1>{props.name} from function component title is {props.heroName} </h1>
            {props.children}
        </div>
    )
}

// destructuring props using {}
// export const Greet = ({name, heroName}) =>{
//     return(
//         <div>
//             <h1>{name} from function component title is {heroName}</h1>
//         </div>
//     )
// }

// destructuring props using within function body
// export const Greet = (props) =>{
//     const {name, heroName} = props
//     return(
//         <div>
//             <h1>{name} from function component title is {heroName}</h1>
//         </div>
//     )
// }