import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        //conditional rendering using if-else
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h1>Welcome Shoaib</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>Welcome Guest</h1>
        //         </div>
        //     )
        // }



        //conditional rendering using element variables
        // let message;
        // if (this.state.isLoggedIn) {
        //        message =  
        //             <div>
        //                 <h1>Welcome Shoaib</h1>
        //             </div>
        //     } else {
        //         message =
        //             <div>
        //                 <h1>Welcome Guest</h1>
        //             </div>
        //     }
        //     return(
        //         <div>
        //             {message}
        //         </div>
        //     )



        //conditional rendering using ternary operators
        // return (
        //     this.state.isLoggedIn ?
        //         <h1>Welcome Shoaib</h1> :
        //         <h1>Welcome Guest</h1>
        // )



        //conditional rendering using short circuit operator
        return (
            this.state.isLoggedIn && <h1>Welcome Shoaib</h1>
        )

        // return (
        //     <div>
        //         <h1>Welcome Shoaib</h1>
        //         <h1>Welcome Guest</h1>
        //     </div>
        // )
    }
}

export default UserGreeting
