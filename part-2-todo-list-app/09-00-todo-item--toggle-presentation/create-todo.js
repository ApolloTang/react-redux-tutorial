import React from 'react';
import reactDOM from 'react-dom';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
        this.state = {
            inputText: ''
        };
    }

    handle_inputChange(e) {
        const inputText = e.target.value;
        this.setState({ inputText });
    }

    handle_keyUp(e) {
        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.createTodo(this.state.inputText);
            this.setState({ inputText: ''});
        }
    }

    render() {
        return (
            <input type="text"
                onChange={this.handle_inputChange}
                onKeyUp={this.handle_keyUp}
                value={this.state.inputText}
            />
        );
    }
}
CreateTodo.proptypes = {
    createTodo: React.PropTypes.func
}

export default CreateTodo;
