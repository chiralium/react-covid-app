import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                Summary Countries: { this.props.countries.length }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries : state
    }
}

const HeaderRedux = connect(
    mapStateToProps
)(Header);

export default HeaderRedux;