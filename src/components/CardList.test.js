import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('expect to render card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Jon Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(render(<CardList robots={mockRobots}	/>)).toMatchSnapshot();
});
