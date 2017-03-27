import React from 'react';
import renderer from 'react-test-renderer';
import ImageButton from './ImageButton';

it('renders component correctly', () => {
    const props = {
    };
    const component = renderer.create(<ImageButton {...props} />);
    expect(component).toMatchSnapshot(component);
});
