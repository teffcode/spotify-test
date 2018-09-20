import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import TracksTable from '../../components/TracksTable';
import renderTracksTable from '../../components/TracksTable';

describe('SearchBar Component', () => {
    const makeWrapper = (newProps = {}) => {
        const defaultProps = {
            tracks: {},
            history: {
                push: spy()
            }
        };
        const props = Object.assign({}, defaultProps, newProps);
        const wrapper = shallow(<TracksTable {...props} />);
        return { props, wrapper };
    };

    const { props, wrapper } = makeWrapper();

    it('renders without crashing', () => {
        expect(wrapper).to.be.present();
    });

    it('the component is a div', () => {
        expect(wrapper).to.have.type('div');
    });

    it('render one children: table', () => {
        expect(wrapper.children()).to.have.length(1);
    });

    it('TracksTable has a tracks-table className', () => {    
        expect(wrapper).to.have.className('tracks-table');    
    });

    it('no se', () => {    
        expect(wrapper
            .children()
            .at(0)
            .children()
            .at(1)
        ).to.contain(<tbody/>);
    });

    it('renders tr element by track', () => {
    });
    
});