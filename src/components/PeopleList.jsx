import React from 'react';
import Person from './People';

function PeopleList(props) {
    const renderList = props.people.map((person) => {
        return <Person key={ person.id } config={ person } />;
    });

    return (
        <div>{ renderList }</div>
    );
}

export default PeopleList;