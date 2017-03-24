import React from 'react';
import reactDOM from 'react-dom';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
    }
    handle_inputChange(e) {
        const inputText = e.target.value;
        console.log('inputText: ', inputText);
        this.props.createTodo(inputText);
    }
    render() {
        return (
            <input type="text"
                onChange={this.handle_inputChange}
                onKeyUp={this.handle_keyUp}
            />
        );
    }
}
CreateTodo.propTypes = {
    createTodo: React.PropTypes.func
}


export default CreateTodo;
