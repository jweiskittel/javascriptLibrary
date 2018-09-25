import React from 'react'

const ListItem = props => {
    return (
    <div>
        <span><li>{props.item}<input type='checkbox' /></li></span>
    </div>
        
    )
}

export default ListItem