import React from 'react';
import renderer from 'react-test-renderer';
import BlockStyleControls from './BlockStyleControls';

it('renders without crashing', () => {
    const props = {
        onToggle: () => {},
        editorState: {}
    };
    const component = renderer.create(<BlockStyleControls {...props} />);
    expect(component).toMatchSnapshot(component);
});
