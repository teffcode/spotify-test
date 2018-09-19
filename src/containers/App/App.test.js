// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { expect } from 'chai';
// import { Provider } from 'react-redux';

// import App from './index';
// import { mapStateToProps } from './index';

// describe('App component', () => {
//     const makeWrapper = (newProps = {}) => {
//         const defaultProps = {
//             isAuthenticated: true,
//             history: {}
//         };
//         const store = {
//             entities: {}
//         };
//         const props = { ...defaultProps, ...newProps };
//         //   const wrapper = shallow(<App {...props} store={store}/>).dive();
//         const wrapper = mount(
//             <Provider >
//                 <App/>
//             </Provider>
//         ).dive()
//         return { props, wrapper };
//     };
  
//     it('renders without crashing', () => {
//       const { wrapper } = makeWrapper();
//       expect(wrapper).to.be.present();
//     });


//     it('returns an object with 1 property: isAuthenticated', () => {
//         const fakeState = {
//             entities: {}
//         }
//         const result = mapStateToProps(fakeState);
    
//         const expected = {
//             isAuthenticated: true
//         };
    
//         expect(expected).to.eql(result);
//       });
  
// });