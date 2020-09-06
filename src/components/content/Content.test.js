import Enzyme from 'enzyme';
import React from 'react';
import Content from './Content';
import toJson from 'enzyme-to-json';

let shallowWrapperContent;
describe('Component \'Content\'', () => {
  beforeEach(() => {
    const initContentProps = {
      onRequestData: jest.fn(),
      isPending: false,
      data: [],
      searchField: ''
    };
    shallowWrapperContent = Enzyme.shallow(<Content {...initContentProps}/>);
  });

  it('should shallowly match its snapshot', () => {
    expect(toJson(shallowWrapperContent, {mode: 'deep'})).toMatchSnapshot();
  });

  it('filter() should return an empty array if nothing was found', () => {
    const data = [{name: 'Mia'}, {name: 'Sean'}, {name: 'Michael'}];
    const toFind = 'John';
    const filteredData = shallowWrapperContent.instance().filter(data, toFind);
    expect(filteredData).toEqual([]);
  });

  it('filter() should return an array of objects which \'name\' property match a given one', () => {
    const data = [{name: 'Mia'}, {name: 'Sean'}, {name: 'Michael'}];
    const toFind = 'Mi';
    const filteredData = shallowWrapperContent.instance().filter(data, toFind);
    expect(filteredData).toHaveLength(2);
  });

  it('render() should render \'Loading\' heading (<h4>) if data fetching is pending', () => {
    const prevProps = shallowWrapperContent.props();
    shallowWrapperContent.setProps({...prevProps, isPending: true});
    expect(shallowWrapperContent.find('h4')).toHaveLength(1);
  });
});