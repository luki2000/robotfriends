import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';

it('expect to render card component', () => {
    expect(render(<Card />)).toMatchSnapshot();
});
