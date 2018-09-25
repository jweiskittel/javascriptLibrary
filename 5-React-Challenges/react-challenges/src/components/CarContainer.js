import React, { Component } from 'react'
import Car from './Car'

export default class CarContainer extends Component {
    constructor(){
        super()
        this.state = {
            make: '',
            model: '',
            color: ''
        }
    }

    changeMake = (e) => {
        this.setState({ make: e.target.value})
    }

    changeModel = (e) => {
        this.setState({ model: e.target.value})
    }

    changeColor = (e) => {
        this.setState({ color: e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange={this.changeMake} placeholder='Make' />
                <input onChange={this.changeModel} placeholder='Model' />
                <input onChange={this.changeColor} placeholder='Color' />                
                <Car make={this.state.make} model={this.state.model} color={this.state.color} />
            </div>
        )
    }
}