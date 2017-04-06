import React from 'react';
import TodoList from './list';

const FilteredTodoList = (props) => {
    console.log('todoListFilter: ', props.todoListFilter);
    return (
        <TodoList
            todoList={props.todoList}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
        />
    )
}

FilteredTodoList.propTypes = {
    todoList: React.PropTypes.array,
    todoListFilter: React.PropTypes.string,
    toggleTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func
};

export default FilteredTodoList;

