import React from 'react';

const Searchbox = (props) => {
    return (
        <div className='ma2'>
            <input type='search'
                   placeholder='search for robots'
                   className='pa2 ba b--green bg-lightest-blue'
                   onChange={props.onSearch}></input>
        </div>
    );
};
export default Searchbox;