import { expect } from 'chai';

import { mapStateToProps } from './Navbar.container';
// import state from '../../../utils/fakeState';

describe('Navbar', () => {
  describe('mapStateToProps', () => {
    const user = {
        displayName: ''
    };
    const result = mapStateToProps({ user });
    const expected = {
      displayName: user.displayName,
    };

    it('returns an object', () => {
      expect(result).to.eql(expected);
    });
  });
});
