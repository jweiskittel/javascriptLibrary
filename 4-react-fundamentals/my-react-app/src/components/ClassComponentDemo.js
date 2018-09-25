import React, { Component } from 'react'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { count1: 0, count2: 0}
    }

    incrementCount = () => {
        console.log('increment called')
        this.setState(
            {count1: this.state.count1 + 1}
        )
    }

    decrementCount = () => {
        this.setState(
            {count2: this.state.count2 - 1}
        )
    }

    render() {
        console.log('render called')
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <ClassComponentNotes />
                    <hr />
                    <h3>Smash that like button!</h3>
                    <button onClick={this.incrementCount}>
                        <FaThumbsUp /> {this.state.count1}
                    </button>
                    <button onClick={this.decrementCount}>
                        <FaThumbsDown /> {this.state.count2}
                    </button>
                </div>
            </div>
        )
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React Way" of writing components</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component</dt>
                <dd>Class components need to extend the React Component</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file</dd>
            </dl>
        </div>
    )
}