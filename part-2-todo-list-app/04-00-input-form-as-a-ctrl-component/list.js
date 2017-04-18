import React from 'react';
import _ from 'lodash';


const TodoItem = (props) => <div><code>{JSON.stringify(props.todoItem)}</code></div>;
TodoItem.propTypes = {
    todoItem: React.PropTypes.object
}


const TodoList = (props) => {
    const todoList = _.isArray(props.todoList) ? props.todoList: [];

    return (
        <div>
            { todoList.map( item => <TodoItem key={item.id} todoItem={item} />) }
        </div>
    );
}
TodoList.propTypes = {
    todoList: React.PropTypes.array
}


export default TodoList;


