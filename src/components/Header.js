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
                <div className="text-bold black">Death: 0</div>
                <div className="text-bold green">Alive: 0</div>
                <div className="text-bold yellow">Infected: 0</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries_count : state.count
    }
}

const HeaderRedux = connect(
    mapStateToProps
)(Header);

export default HeaderRedux;