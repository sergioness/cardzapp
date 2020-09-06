import React from 'react';

class Card extends React.PureComponent {
    render() {
        const {id, name, email} = this.props.info;
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt={`${name} thumbnail`} src={`https://robohash.org/${id}`}/>
                <h2>{name}</h2>
                <div>{email}</div>
            </div>
        );
    }
}
export default Card;