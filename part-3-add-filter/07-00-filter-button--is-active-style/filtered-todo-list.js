import React from 'react';
import TodoList from './list';

const FilteredTodoList = (props) => {
    const filterBy = props.todoListFilter;
    const todos_unfiltered = props.todoList;

    const todos_filtered = todos_unfiltered.filter( todo=>{
        let isShown = false;
        switch (true) {
            case (filterBy === 'ALL'):
                isShown = true;
                break;
            case (filterBy === 'IS_DONE'):
                isShown = (todo.isDone === true);
                break;
            case (filterBy === 'IS_NOT_DONE'):
                isShown = (todo.isDone === false);
                break;
            default:
                isShown = false;
                break;
        }
        return isShown;
    });

    return (
        <TodoList
            todoList={todos_filtered}
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

