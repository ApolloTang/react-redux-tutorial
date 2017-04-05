import React from 'react';
import TodoList from './list';

const FilteredTodoList = (props) => {
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
    toggleTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func
};

export default FilteredTodoList;

