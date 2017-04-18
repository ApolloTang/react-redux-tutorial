import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
        this._cache = {inputText : ''};         // <--- [1]
    }
    handle_inputChange(e) {                     // <--- [2]
        const inputText = e.target.value;
        this._cache.inputText = inputText;

        console.log('local-cached: ', this._cache.inputText, ' <--- input changed');
    }
    handle_keyUp(e) {                           // <--- [3]
        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.createTodo(this._cache.inputText);
            this._cache.inputText = '';         // <--- [4]

            console.log('local-cached: ', this._cache.inputText, '<--- cleared');
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

{/* ---------------------------------------------

    [1] local-cache initialized

    [2] In handle_inputChange(), form value is saved
        to local-cache

    [3] In handle_keyup() if it is RETURN key press, then:
            1. Called createTodo() to pass componet state to parent
               via callback
            2. Empty the cache

    [4] Cache is cleared but form is NOT cleared ( we will solve
        this problem in next lesson )

*/}
