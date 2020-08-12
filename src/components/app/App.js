import React from 'react';
import List from '../list/List';
import Searchbox from '../searchbox/Searchbox';
import Scrollable from '../scrollable/Scrollable';
import ErrorBoundry from '../errorboundry/ErrorBoundry';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchString: '',
            dataList: []
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

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({dataList: json}));
    }

    render() {
        const filteredDataList = this.filter(this.state.dataList, this.state.searchString);
        return (
            <React.Fragment>
                <div className='tc'>
                    <h1 className='f1'>{this.props.title}</h1>
                    <ErrorBoundry>
                        <Searchbox onSearch={this.onSearchChange}/>
                        <Scrollable>
                            <List values={filteredDataList}/>
                        </Scrollable>
                    </ErrorBoundry>
                </div>
            </React.Fragment>
        );
    }
};
export default App;