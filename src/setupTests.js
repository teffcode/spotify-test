import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
global.expect = expect;

// const storeFake = state => {
//     return {
//         default() {},
//         subscribe() {},
//         dispatch() {},
//         getState() {
//             return { ...fakeState, ...state };
//         }
//     };
// };
  
// global.storeFake = storeFake;
// global.fakeState = fakeState;