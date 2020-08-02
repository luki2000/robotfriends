import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
});

it('renders Mainpage without crashing', () => {
    console.log(wrapper);
    render(wrapper).toMatchSnapshot();
});