import React from 'react'

class EventBind extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this)
    // }

    //using new function as arrow
    clickHandler = ()=>{
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>

                {/* bind using this keyword */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}


                {/* bind using arrow function */}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> */}

                {/* bind using bind in constructor */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind;