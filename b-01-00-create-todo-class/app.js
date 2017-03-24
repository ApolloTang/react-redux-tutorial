import React from 'react';
import reactDOM from 'react-dom';
import List from './list';
import CreateTodo from './create-todo';

class App extends React.Component {
    constructor(props) {
        super();
        this.handle_createTodo = this.handle_createTodo.bind(this);
        this.state = {
            todoList: []
        };
    }

    handle_createTodo( todoText ) {
        const todoList_prev = this.state.todoList;
        const todoList_next = todoList_prev;

        const todoItem_next = { id: Date.now()+'', text: todoText, isDone: false };

        todoList_next.push(todoItem_next);

        this.setState({
            list: todoList_next
        });
    }

    render() {
        return (
            <div>
                <CreateTodo createTodo={this.handle_createTodo} />
                <List todoList={this.state.todoList} />
            </div>
        );
    }
};


export default App;


