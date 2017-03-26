import React from 'react';
import renderer from 'react-test-renderer';
import BlockStyleControls from './BlockStyleControls';

it('renders without crashing', () => {
    const component = renderer.create(<BlockStyleControls />);
    expect(component).toMatchSnapshot(component);
});
