import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import SearchBar from './index';

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
});