import React from 'react';
import Film from '../components/Films';

function FilmList(props) {
    const renderList = props.films.map((film) => {
        return <Film key={film.id} config={film}/>
    });
    return (
    <div> { renderList }</div>
    );
}

export default FilmList;

