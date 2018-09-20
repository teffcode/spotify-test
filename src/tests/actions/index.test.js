import { expect } from 'chai';
import sinon from 'sinon';
import axios from "axios";

import * as actions from '../../actions/index';
import types from '../../actions/types';

describe('Actions', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it(`should create an action to ${types.FETCH_USER_SELF}`, async () => {
        const fechAction = {
            type: types.FETCH_USER_SELF,
            payload: { data: { prop1: '1', prop2: 2 } },
        }
        sandbox.stub(axios, 'get').resolves({
            data: { prop1: '1', prop2: 2 },
        });
        const fetchUserSelf = await actions.fetchUserSelf();
        expect(fetchUserSelf).to.eql(fechAction);
    })

    it(`should create an action to ${types.FETCH_TRACKS}`, async () => {
        const fechAction = {
            type: types.FETCH_TRACKS,
            payload: { data: { prop1: '1', prop2: 2 } },
        }
        sandbox.stub(axios, 'get').resolves({
            data: { prop1: '1', prop2: 2 },
        });
        const fetchTracks = await actions.fetchTracks();
        expect(fetchTracks).to.eql(fechAction);
    })
});