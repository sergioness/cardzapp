import React from 'react';
import { connect } from "react-redux";
import { setSearchField, requestData } from '../../actions';
import Header from '../header/Header';
import Content from '../content/Content';

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
    render() {
        return (
            <div className='tc'>
                <Header />
                <Content {...this.props}/>
            </div>
        );
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);