// @flow
import React, { PropTypes } from 'react';
import StyledButton from './StyleButton';

const INLINE_BUTTONS = [
    {
        label: 'B',
        style: 'BOLD',
        icon: 'bold',
        description: 'Bold'
    },
    {
        label: 'I',
        style: 'ITALIC',
        icon: 'italic',
        description: 'Italic'
    },
    {
        label: 'U',
        style: 'UNDERLINE',
        icon: 'underline',
        description: 'Underline'
    },
    {
        label: 'Hi',
        style: 'HIGHLIGHT',
        description: 'Highlight selection'
    }
];

const InlineToolbar = ({ onToggle, editorState }:Object) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
        <div>
            {INLINE_BUTTONS.map(item =>
                <StyledButton
                    key={item.label}
                    active={currentStyle.has(item.style)}
                    label={item.label}
                    onToggle={onToggle}
                    style={item.style}
                />
            )}
        </div>
    );
};

InlineToolbar.propTypes = {
    editorState: PropTypes.shape({
        _immutable: PropTypes.object
    }).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default InlineToolbar;
