import React, { Fragment, useEffect } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

import ErrorBoundry from '../components/ErrorBoundry';
import "./MainPage.css";

const MainPage = (props) => {
    
    useEffect(() => {
       props.onRequestRobots();
    },[]);

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


export default MainPage;