import React from 'react';
import renderer from 'react-test-renderer';
import AddButton from './AddButton';

it('renders component correctly', () => {
    const component = renderer.create(<AddButton />);
    expect(component).toMatchSnapshot(component);
});
