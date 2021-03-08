import React from 'react'

class ClassClick extends React.Component {
    clickHandler() {
       console.log("Clicked!!!")
   }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click from class component</button>
            </div>
        )
    }
}

export default ClassClick;