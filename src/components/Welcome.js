import React from 'react'

// class Welcome extends React.Component {
//     render() {
//         return (
//             <h1>Welcome {this.props.name} from class component title is {this.props.heroName}</h1>
//         )
//     }
// }

//destructuring props within body
class Welcome extends React.Component{
    render(){
        const {name, heroName} = this.props
        return(
            <div>
                <h1>Welcome {name} from class component title is {heroName}</h1>
            </div>
        )
    }
}

export default Welcome;