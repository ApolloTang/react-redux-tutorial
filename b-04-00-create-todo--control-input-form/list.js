import React from 'react';
import reactDOM from 'react-dom';
import _ from 'lodash';


const TodoItem = (props) => <div>{JSON.stringify(props.todoItem)}</div>;
TodoItem.propTypes = {
    item: React.PropTypes.string
}


const TodoList = (props) => {
    const todoList = _.isArray(props.todoList) ? props.todoList: [];

    return (
        <div>
            { todoList.map( (item, index) => <TodoItem key={index} todoItem={item} />) }
        </div>
    );
}
TodoList.propTypes = {
    todoList: React.PropTypes.array
}


export default TodoList;


