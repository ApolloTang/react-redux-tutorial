import React from 'react';


class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handle_createTodo = this.handle_createTodo.bind(this);
    }
    handle_createTodo() {
        this.props.createTodo('todo item');
    }
    render() {
        return (
            <div onClick={this.handle_createTodo}>
                click me
            </div>
        );
    }
}
CreateTodo.propTypes = {
    createTodo: React.PropTypes.func
}

export default CreateTodo;
