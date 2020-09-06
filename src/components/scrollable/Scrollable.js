import React from 'react';
import './Scrollable.css';

class Scrollable extends React.PureComponent {
    render() {
        return (
            <div className='scrollable'>
                {this.props.children}
            </div>
        );
    }
};
export default Scrollable;