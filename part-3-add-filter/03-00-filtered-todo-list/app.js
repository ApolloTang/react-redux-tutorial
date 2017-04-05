import React from 'react';

import List from './list';
import CreateTodo from './create-todo';
import TodoListFilterControl from './todo-list-filter-ctrl';
import FilteredTodoList from './filtered-todo-list';                                     // <----- [!]


class App extends React.Component {
    constructor(props) {
        super();

        this.handle_createTodo = this.handle_createTodo.bind(this);
        this.handle_toggleTodo = this.handle_toggleTodo.bind(this);
        this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
        this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
        this.handle_selectFilter = this.handle_selectFilter.bind(this);

        this.state = {
            todoList: [],
            todoListFilter: 'ALL'
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

    handle_toggleTodo(id) {
        const todoList_prev = this.state.todoList;
        const todoList_next = todoList_prev.map( todoItem_prev=>{
            let todoItem_next;

            if (id === todoItem_prev.id) {
                todoItem_next = {
                    ...todoItem_prev,
                    isDone: !todoItem_prev.isDone
                };
            } else {
                todoItem_next = todoItem_prev;
            }

            return todoItem_next;
        });

        this.setState({
            todoList: todoList_next
        });
    }

    handle_deleteTodo(id) {
        const todoList_prev = this.state.todoList;
        const todoList_next = todoList_prev.filter(
            todoItem_prev=>(id !== todoItem_prev.id)
        );

        this.setState({
            todoList: todoList_next
        });
    }

    handle_selectFilter(filterType) {
        this.setState({
            todoListFilter: filterType
        });
    }

    render() {
        return (
            <div>
                <CreateTodo createTodo={this.handle_createTodo} />
                <TodoListFilterControl selectFilter={this.handle_selectFilter} />
                <FilteredTodoList                                                    /* <------ [!] */
                    todoList={this.state.todoList}
                    toggleTodo={this.handle_toggleTodo}
                    deleteTodo={this.handle_deleteTodo}
                />
                <pre><code>{JSON.stringify(this.state, null, 4)}</code></pre>
            </div>
        );
    }
};


export default App;


