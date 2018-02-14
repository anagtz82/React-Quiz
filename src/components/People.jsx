import React, { Component } from 'react';
import PeopleList from './components/PeopleList';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/people')
            .then((response) => {
                return response.json();
            })
            .then((people) => {
                this.setState({
                    people
                });
            })
            .catch((err) => {
                this.setState({
                    hasError: true,
                    error: err
                });
            });
    }

    render() {
        return <PeopleList people={ this.state.people } />;
    }
}

export default People;