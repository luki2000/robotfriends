import React from 'react';
import MainPage from '../components/MainPage';

import "./App.css";
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const App = (props) => {

    return <MainPage {...props}/>;
}

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);