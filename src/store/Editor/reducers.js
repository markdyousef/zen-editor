// @flow
const initialState = {
    readOnly: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'READ_ONLY':
        return Object.assign({}, state, { readOnly: !state.readOnly });
    default:
        return state;
    }
};
