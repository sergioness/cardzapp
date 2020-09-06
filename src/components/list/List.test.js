import Enzyme from 'enzyme';
import React from 'react';
import List from './List';
import toJson from 'enzyme-to-json';

describe('Component \'List\'', () => {
  it('shallow matches the snapshot', () => {
    const mockValues = [
      {
        id: 0,
        name: 'dummy card',
        email: 'card@card.com'
      }
    ];
    const shallowList = Enzyme.shallow(<List values={mockValues}/>);
    expect(toJson(shallowList, {mode: 'deep'})).toMatchSnapshot();
  });
});
