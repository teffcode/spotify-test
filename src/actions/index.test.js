import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

import * as actions from './';
import {fetchUserSelf} from './';
import types from './types';
import config from '../config'

describe('Actions', () => {
    let sandbox;
    let axiosGetStub;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        axiosGetStub =  sandbox
            .stub(axios, 'get')
            .resolves({
                data: {
                    prop1: 1,
                    prop2: 2
                }
            })
    })

    afterEach(() => {
        sandbox.reset();
    });

    // after(() => {
    //     sandbox.restore();
    // });

    it('fetchUserSelf', async () => {
        sinon.assert.calledOnce(axiosGetStub);
        const fetchUserSelf = await actions.fetchUserSelf();
        console.log(fetchUserSelf)
    })
});