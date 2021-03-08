import React, { Component } from 'react'
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Shoaib Ahmed</h1> */}
        {/* <Greet name="Bruce" heroName="Batman" />
        <Greet name="Clark" heroName="Superman" />
        <Greet name="Diana" heroName="Wonder Woman" /> */}
        {/* <Greet name="Bruce" heroName="Batman" >
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman"><button>Click me</button> </Greet>
        <Greet name="Diana" heroName="Wonder Woman" ><h4>Good hogaya jee</h4> </Greet> */}
        {/* <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
        {/* <Hello /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <Inline />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form /> */}
        <LifeCycleA />
      </div>
    )
  }
}

export default App;
