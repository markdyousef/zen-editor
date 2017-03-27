import React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from './ActionButton';

it('renders component correctly', () => {
    const props = {
    };
    const component = renderer.create(<ActionButton {...props} />);
    expect(component).toMatchSnapshot(component);
});
