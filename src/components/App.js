import React from 'react';
import { connect } from 'react-redux';

import Header from "./Header";
import { add_country_action } from "../redux/actions";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country_name : "",
            text_field_add_county_show : false,

            suggested_countries : []
        }

        this.find_country_by_name = this.find_country_by_name.bind( this );
        this.add_country_handler = this.add_country_handler.bind( this );
    }

    add_country_handler( name ) {
        this.props.add_country(name);
        this.setState({ text_field_add_county_show : false });
    }

    find_country_by_name( e ) {
        e.stopPropagation();
        let term = e.target.value;
        fetch(
            `https://restcountries.eu/rest/v2/name/${term}`,
            {
                method : 'GET'
            }
        ).then( response => response.json() )
            .then(
                ( countries ) => {
                    let suggested = countries.map(
                        (item) => {
                            return item.name;
                        }
                    );
                    this.setState({ suggested_countries : suggested });
                }
            )
    }

    render() {
        return (
            <>
                <Header/>
                { this.props.countries.length === 0 &&
                    <div className="add-button" onClick={ () => this.setState({ text_field_add_county_show : true }) }>+</div>
                }
                { this.state.text_field_add_county_show &&
                    <Overlay
                        close_overlay={ () => this.setState({text_field_add_county_show : false })}
                    >
                        <input type="text"
                               className="country-input"
                               onClick={ (e) => e.stopPropagation() }
                               onChange={ this.find_country_by_name }
                        />
                        <select className="country-suggestions" multiple onClick={ (e) => e.stopPropagation() }>
                            { this.state.suggested_countries.length > 0 &&
                                this.state.suggested_countries.map(
                                    (name, index) => {
                                        return (
                                            <option key={index} onClick={ (name) => this.add_country_handler(name) }>{name}</option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </Overlay>
                }
            </>
        );
    }
}

const Overlay = (props) => {
    return (
        <div className="overlay" onClick={props.close_overlay}>
            { props.children }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        add_country : country => {
            dispatch( add_country_action( country ) );
        }
    }
}

const mapStateToProps = state => {
    return {
        countries : state
    }
}

const AppRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppRedux;