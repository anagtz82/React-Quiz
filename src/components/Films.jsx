import React from 'react';


function Film(props) {
    return (
        <div>
            <h2>{ props.config.title }</h2>
            <h2>{ props.config.description }</h2>
            </div>
    );
}

export default Film;