import React, { Component } from 'react'
import styled from 'styled-components'
import FormResults from './FormResults'

const Search = styled.input`
    border-radius: 10px;
    text-align: center;
    height: 5vh;
    width: 35vh;
    margin: 10px;
`

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleKeyUp = (e) => {
        const key = 'f3d75409fb1448df71820d216f8fcb34'
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
        .then(response => {
            if (response.status !== 200) {
                console.log('Error: ' + response.status)
                return
            }
            response.json().then(data => {
                const results = data.results
                this.setState({ results })
                console.log(results)
            })
        })
        .catch(err => {
            console.log('Fetch Error :-S', err)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id='form'>
                <Search onKeyUp={this.handleKeyUp} id='searchInput' className='searchBar' type='text' placeholder='Search a movie' required/>
                {this.state.results === [] ? <div></div> : <FormResults results={this.state.results} /> }
            </form>
        )
    }
}