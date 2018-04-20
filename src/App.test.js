/* global it */

import { shallow, mount, render } from 'enzyme';


describe('Table contributors without workplace', () => {
  it('renders without crashing', () => {
  expect(shallow(<Table />).exists()).toBe(true)
  });

  // it('renders only contributors without workplace', () =>{
  //   expect(shallow(<Table />).exists()).toBe(true)
  // })
})
