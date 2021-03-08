import React from 'react'

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    Increment() {
        // this.state.count = this.state.count +1;
        // console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Callback Value', this.state.count)
        })
        console.log(this.state.count)
    }
    Decrement() {
        // this.state.count = this.state.count -1;
        // console.log(this.state.count)
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log('Callback Value', this.state.count)

        })
        console.log(this.state.count)

    }
    render() {
        return (
            <div>
                <h3>Count - {this.state.count}</h3>
                <button onClick={() => this.Increment()}>Increment</button>
                <button onClick={() => this.Decrement()}>Decrement</button>
            </div>
        )
    }
}