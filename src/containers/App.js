import React, { Fragment, useState, useEffect } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import "./App.css";

const App = () => {
    /**
     * this.state = {
            robots: [],
            searchfield : ''
        }
     */

    const [searchfield, handleSearchFieldValue] = useState('');
    const [robots, setRobots] = useState([]);

    const onSearchChange = (event) => {
        handleSearchFieldValue(event.target.value)
        // this.setState({searchfield: event.target.value});
    }
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => setRobots(users));
      });
    

    // const { robots, searchfield } = this.state;
    const filteredRbots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? 
        <h1>Loading</h1>
        :
        (
            <Fragment> 
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
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
/*
class App extends React.Component {
    constructor() {
    super();
        this.state = {
            robots: [],
            searchfield : ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => {this.setState({robots: users})});
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRbots = robots.filter( robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ? 
            <h1>Loading</h1>
            :
            (
                <Fragment> 
                    <div className='tc'>
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <ErrorBoundry>
                                <Cardlist robots={filteredRbots}/>
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    }*/

export default App;