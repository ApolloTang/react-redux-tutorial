import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
        this.state = { inputText: '' };       // <--- [a]
    }
    handle_inputChange(e) {
        const inputText = e.target.value;
        this.setState({ inputText });         // <--- [b]

        console.log('component-state: ', this.state.inputText, ' <--- input changed');
    }
    handle_keyUp(e) {                         // <--- [c]
        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.createTodo(this.state.inputText);
            this.setState({ inputText: ''});  // <--- [d]

            console.log('component-state: ', this.state.inputText, '<--- cleared');
        }
    }
    render() {
        return (
            <input type="text"
                onChange={this.handle_inputChange}
                onKeyUp={this.handle_keyUp}
                value={this.state.inputText}  /*  <-- [e] */
            />
        );
    }
}
CreateTodo.propTypes = {
    createTodo: React.PropTypes.func
}

export default CreateTodo;

{/* -----------------------------------------------

    [a] Use component-state instead of local-cache

    [b] In handle_inputChange(), form value is saved to
        component-state, and this triggers rendering

    [c] In handle_keyUp(), if it is RETURN key press, then:
            1. Called createTodo() to pass componet state to parent
               via callback
    [d]     2. Empty the component-state and this
               trigger rendering (and thus cleared the form)

    [e] Value of the form is 'Pinned' to value in state,
        for this, this component is called the *CONTROL COMPONENT*

*/}



