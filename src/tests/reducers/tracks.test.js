import { expect } from 'chai';

import tracks from '../../reducers/tracks';
import types from '../../actions/types';

describe('Tracks Reducer', () => {

    it('should return the initial state', () => {
        expect(tracks(undefined, {})).to.eql({})
    });

    it('should handle FETCH_USER_SELF', () => {
        const action = {
            type: types.FETCH_TRACKS,
            payload: {
                data: {
                    tracks: {
                        items: {}
                    }
                }
            }
        };
        expect(tracks({}, action)).to.eql({});
    })

});