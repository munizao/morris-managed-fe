import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/mm.js', () => ({
  signedIn: jest.fn(() => Promise.resolve()),
  getAllDances: jest.fn(() => Promise.resolve())
}));

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
