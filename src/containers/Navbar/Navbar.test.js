import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, assert } from 'sinon';

import Navbar from './Navbar';

describe('Navbar Component', () => {
    const makeWrapper = (newProps = {}) => {
        const defaultProps = {
            displayName: '',
            logoutUser: spy(),
            history: {
                push: spy()
            }
        };
        const props = Object.assign({}, defaultProps, newProps);
        const wrapper = shallow(<Navbar {...props} />);
        return { props, wrapper };
    };

    const { props, wrapper } = makeWrapper();

    it('renders without crashing', () => {
        expect(wrapper).to.be.present();
    });

    it('the component is a nav', () => {
        expect(wrapper).to.have.type('nav');
    });

    it('simulate click in li element', () => {
        wrapper
            .find('ul > li')
            .simulate('click', { preventDefault: () => {} });
    });

    it('renders children', () => {
        expect(wrapper.find('nav > li')).to.have.text(props.displayName);
    });

});