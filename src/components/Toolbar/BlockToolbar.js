// @flow
import React, { PropTypes } from 'react';
import { RichUtils } from 'draft-js';
import StyleButton from '../StyleButton';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one', icon: 'glyph-title' },
  { label: 'H2', style: 'header-two', icon: 'glyph-subtitle' },
  { label: 'H3', style: 'header-three', icon: '' },
  { label: 'Quote', style: 'blockquote', icon: 'glyph-quote' },
  { label: 'Bulleted List', style: 'unordered-list-item', icon: 'glyph-list' },
  { label: 'Numbered List', style: 'ordered-list-item', icon: 'glyph-list' },
  { label: 'Code Block', style: 'code-block', icon: 'glyph-code' }
];

const BlockToolbar = ({ onToggle, editorState }:Object) => {
    const blockType = RichUtils.getCurrentBlockType(editorState);
    return (
        <div>
            {BLOCK_TYPES.map(item =>
                <StyleButton
                    key={item.label}
                    active={item.style === blockType}
                    label={item.label}
                    onToggle={onToggle}
                    style={item.style}
                    icon={item.icon}
                />
            )}
        </div>
    );
};

BlockToolbar.propTypes = {
    editorState: PropTypes.shape({
        _immutable: PropTypes.object
    }).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default BlockToolbar;
