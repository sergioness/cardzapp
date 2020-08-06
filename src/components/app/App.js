import React from 'react';
import List from '../list/List';
import Searchbox from '../searchbox/Searchbox';
import { robots } from '../../model/data'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchString: '',
            dataList: robots
        };
    }

    onSearchChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }

    filter = (list, value) => {
        const valueLowerCase = value.toLocaleLowerCase();
        return list.filter((listElement) => {
            return listElement.name.toLocaleLowerCase().includes(valueLowerCase);
        });
    }

    render() {
        const filteredDataList = this.filter(this.state.dataList, this.state.searchString);
        return (
            <React.Fragment>
                <div className='tc'>
                    <h1 className='f1'>{this.props.title}</h1>
                    <Searchbox onSearch={this.onSearchChange}/>
                    <List values={filteredDataList}/>
                </div>
            </React.Fragment>
        );
    }
};
export default App;