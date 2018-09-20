import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import SearchBar from '../../components/SearchBar';

describe('SearchBar Component', () => {
    const makeWrapper = (newProps = {}) => {
        const defaultProps = {
            onSearchTerm: spy()
        };
        const props = Object.assign({}, defaultProps, newProps);
        const wrapper = shallow(<SearchBar {...props} />);
        return { props, wrapper };
    };

    const { props, wrapper } = makeWrapper();

    it('renders without crashing', () => {
        expect(wrapper).to.be.present();
    });

    it('the component is a div', () => {
        expect(wrapper).to.have.type('div');
    });

    it('render one children: input', () => {
        expect(wrapper.children()).to.have.length(1);
    });

    it('sets state in its onInputChange method', () => {
        wrapper.instance().onInputChange(1);
        expect(wrapper.state().term).to.eql(1);
    });
});
