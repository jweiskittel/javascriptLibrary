import React, { Component } from 'react'

export default class Mood extends Component {
    constructor() {
        super()
        this.state = { mood: '' }
    }

    currentMood = (e) => {
        this.setState({mood: e.target.value})
    }

    render() {
        return (
            <div>
                <h4>How are you today?</h4>
                <input onChange={this.currentMood}></input>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}

