import React, { Component} from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    constructor() {
        super() 
        this.state = {
            list: [],
            listItem: ''
        }
        console.log(this.state.listItem)
    }

    newItem = (e) => {
        this.setState({ listItem: e.target.value})
    }

    addItem = (e) => {
        e.preventDefault()
        let listArray = this.state.list
        listArray.push(this.state.listItem)
        this.setState({list: listArray})
    }

    handleDelete = () => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input onChange={this.newItem}/>
                    <button type='submit'>+</button>
                    {this.state.list.map((listItem, index) => {
                        return(
                        <ListItem item={listItem} key={index}/>   
                        )
                    })}
                </form>
                <button name='delete' onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}
