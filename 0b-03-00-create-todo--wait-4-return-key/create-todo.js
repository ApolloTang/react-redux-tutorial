import React from 'react';
import reactDOM from 'react-dom';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
    }
    handle_inputChange(e) {
        // Taken care of save to cached

        const inputText = e.target.value;
        this._inputText = inputText;            // this is thie cache
    }
    handle_keyUp(e) {
        // Taking care of sending cached value when return is press
        // then reset the cache to empthy string

        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.createTodo(this._inputText);
            this._inputText = ''; // <--- clear cache but will not clear input box
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
