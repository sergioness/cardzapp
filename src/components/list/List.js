import React from 'react';
import Card from '../card/Card';

class List extends React.PureComponent {
    render() {
        const values = this.props.values;
        return (
            <React.Fragment>
            {
                values.map((value) => {
                    return (<Card key={value.id} info={value}/>);
                })
            }
            </React.Fragment>
        );
    }
};
export default List;