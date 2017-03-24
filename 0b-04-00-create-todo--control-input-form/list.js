import React from 'react';
import reactDOM from 'react-dom';
import _ from 'lodash';


const TodoItem = (props) => {
    const text = (props.todoItem.text) ? props.todoItem.text : '';

    return(
        <div>
            <span>{text}</span>
        </div>
    );
}
TodoItem.propTypes = {
    todoItem: React.PropTypes.object
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


