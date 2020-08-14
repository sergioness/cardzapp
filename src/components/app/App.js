import React from 'react';
import { connect } from "react-redux";
import List from '../list/List';
import Searchbox from '../searchbox/Searchbox';
import Scrollable from '../scrollable/Scrollable';
import ErrorBoundry from '../errorboundry/ErrorBoundry';
import './App.css';
import { setSearchField, requestData } from '../../actions';

const mapStateToProps = (state) => {
    return {
        ...state.searchCard,
        ...state.requestData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            const action = setSearchField(event.target.value);
            return dispatch(action);
        },
        onRequestData: () => {
            return dispatch(requestData());
        }
    };
};


class App extends React.Component {

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
            (<React.Fragment>
                <div className='tc'>
                    <h1 className='f1'>{this.props.title}</h1>
                    <ErrorBoundry>
                        <Searchbox onSearch={onSearchChange}/>
                        <Scrollable>
                            <List values={filteredDataList}/>
                        </Scrollable>
                    </ErrorBoundry>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);