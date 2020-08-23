import React from 'react';
import Header from '../header/Header';
import Content from '../content/Content';

class App extends React.PureComponent {
    render() {
        return <div className='tc'>
            <Header text={this.props.title}/>
            <Content />
        </div>
    }
};
export default App;