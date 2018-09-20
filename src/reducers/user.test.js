import { expect } from 'chai';

import user from './user';
import types from '../actions/types';

describe('User Reducer', () => {

    it('should return the initial state', () => {
        expect(user(undefined, {})).to.eql({})
    });

    it('should handle FETCH_USER_SELF', () => {
        const action = {
            type: types.FETCH_USER_SELF,
            payload: {
                data: {
                    display_name: '',
                    email: ''
                }
            }
        };
        expect(user({}, action)).to.eql(
            {
                displayName: '',
                email: ''
            }
        );
    })

    it('should handle LOGOUT_USER', () => {
        const action = {
            type: types.LOGOUT_USER,
            payload: {}
        };
        expect(user({}, action)).to.eql({});
    })
});