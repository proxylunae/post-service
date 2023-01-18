import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0        // Получение состояния компонента, т.к. в классах нельзя использовать хуки
        }
        this.increment = this.increment.bind(this); // Явная привязка компонента к функциям
        this.decrement = this.decrement.bind(this); // Явная привязка компонента к функциям
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <h3 style={{opacity: .5, color: "lightcoral"}}>ClassComponentCounter</h3>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;