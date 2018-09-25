import React from 'react'
import styled from 'styled-components'

const MovieList = styled.ul`
    list-style-type: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const MovieItem = styled.li`
    background-color: darkgray;
    padding: 5px;
    margin: 5px;
    text-align: center;
`

const FormResults = ({results}) => {
    const link = 'https://image.tmdb.org/t/p/w300'
    const resultsFormatted = results.map((element, index) => 
    <MovieItem key={index}>
        <img src={results[index].poster_path === null ? 'http://via.placeholder.com/640x960' : `${link}${results[index].poster_path}`} alt={`${results[index].title} poster`} className='resultPoster' />
        <div>
            <p>{results[index].title}</p>
            <p>{results[index].release_date}</p>
        </div>
    </MovieItem>
    )
    return (
        <MovieList id='results'>
            {resultsFormatted}
        </MovieList>
    )
}

export default FormResults