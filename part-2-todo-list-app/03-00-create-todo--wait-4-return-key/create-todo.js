import React from 'react';
import reactDOM from 'react-dom';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
    }

    handle_inputChange(e) {                     // <--- [1]
        const inputText = e.target.value;
        this._inputText = inputText;
    }

    handle_keyUp(e) {                           // <--- [2]
        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.createTodo(this._inputText);
            this._inputText = '';               // <--- [3]
        }
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


{/*

[1] handle_inputChange()

    save form value to a cache

[2] handle_keyup()

    Wait for RETURN key press
        1. Call createTodo() which save to the store
        2. Empty the cache

[3] Cache is clear but form is NOT cleared


*/}
