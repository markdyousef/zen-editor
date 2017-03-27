import React from 'react';
import renderer from 'react-test-renderer';
import AddButton from './AddButton';

it('renders component correctly', () => {
    const props = {
        editorState: {},
        focus: () => {},
        setEditorState: () => {}
    };
    const component = renderer.create(<AddButton {...props} />);
    expect(component).toMatchSnapshot(component);
});
