import React from 'react';
import reactDom from 'react-dom';
import _ from 'lodash';


const TodoItem = function(props) {
    const textStyle = {
        display:'inline-block',
        width: '170px',
        textDecoration: (props.todo.isDone) ? 'line-through' : 'none'
    }
    return (
        <div>
            <span style={{display:'inline-block', width:'100%'}}>
                <span
                    onClick={ ()=>props.toggleTodo(props.todo.id) }
                    style={textStyle}> {props.todo.text} </span>
                <button onClick={ ()=>props.deleteTodo(props.todo.id) }> delete </button>
            </span>
        </div>
    );
};

const TodoCollection = function(props) {
    return (
        <div>
            {
                props.todos.map( todo => {
                    return(
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={props.deleteTodo}
                            toggleTodo={props.toggleTodo}
                        />
                    );
                })
            }
        </div>
    )
};

class TodoAdder extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
        this.state={
            inputText: ''
        }
    }
    handle_inputChange(e) {
        const text = e.target.value;
        this.setState({ inputText: text })
    }
    handle_keyUp(e) {
        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.addTodo(this.state.inputText);
            this.setState({ inputText: ''});
        }
    }
    render() {
        return(
            <input type="text"
                onChange={this.handle_inputChange}
                onKeyUp={this.handle_keyUp}
                value={this.state.inputText}
            />
        )
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handle_addTodo = this.handle_addTodo.bind(this);
        this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
        this.handle_toggleTodo = this.handle_toggleTodo.bind(this);

        this.state = {
            todos:[]
        };
    }
    handle_addTodo(_text) {
        const _id = Date.now().toString();

        const _todos_prev = this.state.todos;
        const _todo_new = { id: _id, text: _text, isDone: false };

        const _todos_next = [
            ..._todos_prev,
            _todo_new
        ];

        this.setState({
            todos: _todos_next
        });
    }
    handle_deleteTodo(_id) {
        const _todos_prev = this.state.todos;
        const _todos_next = _todos_prev.filter( item=>_id !== item.id );

        this.setState({
            todos: _todos_next
        });
    }
    handle_toggleTodo(_id) {
        const _todos_prev = this.state.todos;
        const _todos_next = _todos_prev.map( todo_prev=>{
            let todo_next;
            if ( _id === todo_prev.id ) {
                todo_next = {
                    ...todo_prev,
                    isDone: !todo_prev.isDone
                }
            } else {
                todo_next = todo_prev;
            }
            return todo_next
        });
        this.setState({
            todos: _todos_next
        });
    }
    render() {
        return (
            <div>
                <TodoAdder addTodo={this.handle_addTodo}/>
                <TodoCollection
                    todos={this.state.todos}
                    deleteTodo={this.handle_deleteTodo}
                    toggleTodo={this.handle_toggleTodo}
                />
            </div>
        )
    }
}


const reactContainer = document.getElementById('react-container');
reactDom.render(<TodoApp />, reactContainer);

