// @flow
import { Map } from 'immutable';
import * as types from '../constants';

type Action = {
    type?: string,
    data?: Object
}

const initialState = Map({
    readOnly: false
});

export default (state = initialState, action: Action) => {
    switch (action.type) {
    case types.READ_ONLY:
        return state.set('readOnly', !state.get('readOnly'));
    default:
        return state;
    }
};
