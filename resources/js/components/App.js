import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    state = {
        counter: 0
    }
    incrementCounter = (value) => {
        let newCounter = this.state.counter + value;
        this.setState({
            counter: newCounter
        });
    }
    render() { 
        return (
            <div>
                <div>Count: {this.state.counter}</div>
                <button className="btn btn-success" 
                onClick={() => this.incrementCounter(10)}>
                    +
                </button>
            </div>
        );
    }
}
 
export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
