import React, { Component, Fragment } from 'react';
import FilmList from './FilmList';
import PeopleList from './PeopleList';
import logo from './logo.png';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
                films: [],
                showFilms: false
                };
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/films')
        .then((results) => {
            return results.json();
        })
        .then((films) => {
            this.setState ({
                films
            });
        })
        .catch((err) => {
            console.error(err);
        });
    }

        renderLoading() {
            return (
                <div>
                    <img src={ logo } alt="Studio Logo" />
                    <button onClick= {this.showFilms}>Load Films</button>
                    <button onClick= {this.showPerson}>Load People</button>
                </div>
            );

        }
        showFilms = () => {
            this.setState({
                showFilms: true
            });
        }

        showPeople = () => {
            this.setState({
                showPeople: false
            });
        }

        render() { 
            if (!this.state.showFilms) {
                return <Fragment>{ this.renderLoading() }</Fragment>;
            } else {
                return <FilmList films={ this.state.films } />;
            } else if{
                return <PeopleList people={ this.state.people} />;
            }
        }

    }

export default App;

