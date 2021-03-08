import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shoaib'
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
