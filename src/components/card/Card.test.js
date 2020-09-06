import Enzyme from 'enzyme';
import React from 'react';
import Card from './Card';
import toJson from 'enzyme-to-json';

describe('Component \'Card\'', () => {
  it('shallow matches the snapshot', () => {
    const mockCard = {
      id: 0,
      name: 'dummy card',
      email: 'card@card.com'
    };
    const shallowCard = Enzyme.shallow(<Card info={mockCard}/>);
    expect(toJson(shallowCard, {mode: 'deep'})).toMatchSnapshot();
  });
});
