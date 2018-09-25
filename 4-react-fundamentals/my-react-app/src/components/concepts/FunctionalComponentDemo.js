import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const FunctionalComponentDemo = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Component</h1>
                <p>Functional components allow you to render information to the web page without having to use or change state.</p>
                <ListGroup flush>
                    <dl>
                        <ListGroupItem><dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the dom.</dd></ListGroupItem>
                        <ListGroupItem><dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd></ListGroupItem>
                        <ListGroupItem><dt>No state</dt>
                        <dd>These are 'dumb' components for UI.</dd></ListGroupItem>
                        <ListGroupItem><dt>return()</dt>
                        <dd>Must return a single element.</dd></ListGroupItem>
                    </dl>
                </ListGroup>
            </div>
        </div>
    )
}


export default FunctionalComponentDemo