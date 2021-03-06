import React from 'react';
import List from '../list/List';
import Searchbox from '../searchbox/Searchbox';
import Scrollable from '../scrollable/Scrollable';
import ErrorBoundry from '../errorboundry/ErrorBoundry';

class Content extends React.Component {

    filter = (list, value) => {
        const valueLowerCase = value.toLowerCase();
        return list.filter((listElement) => {
            return listElement.name.toLowerCase().includes(valueLowerCase);
        });
    }

    componentDidMount() {
        this.props.onRequestData();
    }

    render() {
        const { searchField, onSearchChange, data, isPending} = this.props;
        const filteredDataList = this.filter(data, searchField);
        return isPending ?
            (<h4>Loading</h4>) :
            (<ErrorBoundry className='tc'>
                <Searchbox onSearch={onSearchChange}/>
                <Scrollable>
                    <List values={filteredDataList}/>
                </Scrollable>
            </ErrorBoundry>);
    }
};
export default Content;