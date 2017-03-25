import React from 'react';
import reactDOM from 'react-dom';
import List from './list';
import CreateTodo from './create-todo';

class App extends React.Component {
    constructor(props) {
        super();
        this.handle_createTodo = this.handle_createTodo.bind(this);
        this.handle_toggleTodo = this.handle_toggleTodo.bind(this);  //<--- [!]
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
            todoList: todoList_next
        });
    }

    handle_toggleTodo(id) {                                        // <--- [!]
        console.log('handle_toggleTodo: ', id);
    }

    render() {
        return (
            <div>
                <CreateTodo createTodo={this.handle_createTodo} />
                <List
                    todoList={this.state.todoList}
                    toggleTodo={this.handle_toggleTodo}             /* <--- [!] */
                />
            </div>
        );
    }
};


export default App;


