import React from 'react';

export default class Header extends React.PureComponent {
  render() {
    return (<h1 className='f1'>{this.props.text}</h1>);
  }
}