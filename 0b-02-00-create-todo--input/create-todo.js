import React from 'react';
import reactDOM from 'react-dom';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
    }
    handle_inputChange(e) {
        const inputText = e.target.value;
        console.log('inputText: ', inputText);
        this.props.createTodo(inputText);
    }
    handle_keyUp(e) {
        const keyCode = e.keyCode;
        console.log('keyCode: ', keyCode);
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
