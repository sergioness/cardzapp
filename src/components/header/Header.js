import React from 'react';
import './Header.css';

export default class Header extends React.PureComponent {
  title = 'Cardzapp';
  render() {
    return (<h1 className='f1'>{this.title}</h1>);
  }
}