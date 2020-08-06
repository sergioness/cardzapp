import React from 'react';
import Card from '../card/Card';

const List = (props) => {
    const values = props.values;
    return (
        <React.Fragment>
        {
            values.map((value) => {
                return (<Card key={value.id} info={value}/>);
            })
        }
        </React.Fragment>
    );
};
export default List;