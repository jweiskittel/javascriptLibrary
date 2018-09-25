import React from 'react'

const Car = (props) => {
    return (
        <div>
            <p>Make: {props.make}</p>
            <p>Model: {props.model}</p>
            <p>Color: {props.color}</p>
        </div>
    )
}


export default Car