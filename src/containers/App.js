import React, { Fragment, useEffect } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

import ErrorBoundry from '../components/ErrorBoundry';
import "./App.css";
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const App = (props) => {
    
    useEffect(() => {
       props.onRequestRobots();
    },[]);

    console.log('props on render', props)
    const { searchField, onSearchChange, robots, isPending } = props;
    const filteredRbots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    

    return isPending ? 
        <h1>Loading</h1>
        :
        (
            <Fragment> 
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRbots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </Fragment>
        );
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