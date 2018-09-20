import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import axios from "axios";

import * as actions from './';
import {fetchUserSelf} from './';
import types from './types';
import config from '../config'

describe('Actions', () => {

    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('fetchUserSelf', async () => {
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
});