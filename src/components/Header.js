import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="text-bold dark">Summary Countries: { this.props.countries_count }</div>
                <div className="text-bold black">Death: { this.props.death } </div>
                <div className="text-bold green">Alive: { this.props.alive } </div>
                <div className="text-bold yellow">Infected: { this.props.infected }</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries_count : state.count,
        death : state.summary.death,
        alive : state.summary.alive,
        infected : state.summary.infected
    }
}

const HeaderRedux = connect(
    mapStateToProps
)(Header);

export default HeaderRedux;