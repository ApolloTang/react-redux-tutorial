import React from 'react';
import reactDOM from 'react-dom';
import _ from 'lodash';


const TodoItem = (props) => {
    const style_row = {
        display:'inline-block',
        width: '100%'
    }
    const style_text = {
        display:'inline-block',
        width: '170px',
        textDecoration: props.todoItem.isDone ? 'line-through' : 'none'
    }
    return(
        <div style={style_row} >
            <span
                style={style_text}
                onClick={()=>props.toggleTodo(props.todoItem.id)} >
                {props.todoItem.text}
            </span>
            <span>
                <button
                    onClick={()=>props.deleteTodo(props.todoItem.id)}  /* <--- [!] */
                    >delete
                </button>
            </span>
        </div>
    );
};
TodoItem.propTypes = {
    todoItem: React.PropTypes.object,
    toggleTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func                                    // <--- [!]
}


const TodoList = (props) => {
    const todoList = _.isArray(props.todoList) ? props.todoList: [];

    return (
        <div>
            {
                todoList.map( (item, index) => {
                    return(
                        <TodoItem
                            key={index}
                            todoItem={item}
                            toggleTodo={(id)=>props.toggleTodo(id)}
                            deleteTodo={(id)=>props.deleteTodo(id)}    /* <---[!] */
                            />
                    )
                })
            }
        </div>
    );
}
TodoList.propTypes = {
    todoList: React.PropTypes.array,
    toggleTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func                                    // <---[!]
}


export default TodoList;


