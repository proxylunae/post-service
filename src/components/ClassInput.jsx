import React from 'react';

class ClassInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h3 style={{opacity: .5, color: "lightcoral"}}>ClassComponentInput</h3>
                <h1>{`event.target.value: ${this.state.value}`}</h1>
                <input type="text" value={this.state.value} onChange={event => this.setState( {value: event.target.value} )}/>
            </div>
        )
    }
}

export default ClassInput;