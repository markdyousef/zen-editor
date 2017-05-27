// @flow
import * as actions from './actions';
import * as types from '../constants';

describe('actions', () => {
    it(`should return ${types.READ_ONLY}`, () => {
        const expectedAction = {
            type: types.READ_ONLY
        };
        expect(actions.setReadOnly(true)).toEqual(expectedAction);
    });
});
