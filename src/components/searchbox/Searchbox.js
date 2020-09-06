import React from 'react';

class Searchbox extends React.PureComponent {
    render() {
        return (
            <div className='ma2'>
                <input type='search'
                    id='searchbox'
                    aria-label='Search for'
                    placeholder='ex. Leanne Graham'
                    className='pa2 ba b--green bg-lightest-blue'
                    onChange={this.props.onSearch}>
                </input>
            </div>
        );
    }
};
export default Searchbox;