// @flow
import React, { PropTypes } from 'react';
import { RichUtils } from 'draft-js';
import StyleButton from './StyleButton';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'Quote', style: 'blockquote' },
  { label: 'Bulleted List', style: 'unordered-list-item' },
  { label: 'Numbered List', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' }
];

const BlockToolbar = ({ onToggle, editorState }:Object) => {
    const blockType = RichUtils.getCurrentBlockType(editorState);
    return (
        <div>
            {BLOCK_TYPES.map(block =>
                <StyleButton
                    key={block.label}
                    active={block.style === blockType}
                    label={block.label}
                    onToggle={onToggle}
                    style={block.style}
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
