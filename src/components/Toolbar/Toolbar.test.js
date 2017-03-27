import React from 'react';
import renderer from 'react-test-renderer';
import Toolbar from './Toolbar';

it('renders without crashing', () => {
    const props = {
        onToggle: () => {},
        editorState: {}
    };
    const component = renderer.create(<Toolbar {...props} />);
    expect(component).toMatchSnapshot(component);
});
