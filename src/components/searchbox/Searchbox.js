import React from 'react';

const Searchbox = (props) => {
    return (
        <div className='ma2'>
            <label htmlFor='searchbox'
                   className="f4 b pa2"
                   style={{color:'#4cb0af'}}>
                Search for
            </label>
            <input type='search'
                   id='searchbox'
                   placeholder='ex. Leanne Graham'
                   className='pa2 ba b--green bg-lightest-blue'
                   onChange={props.onSearch}>
            </input>
        </div>
    );
};
export default Searchbox;