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
        width: '170px'
    }
    return(
        <div style={style_row} >
            <span
                style={style_text}
                onClick={()=>props.toggleTodo(props.todoItem.id)}                  /* <--- [!] */
                > {props.todoItem.text}
            </span>
        </div>
    );
};
TodoItem.propTypes = {
    todoItem: React.PropTypes.object,
    toggleTodo: React.PropTypes.func                                              // <--- [!]
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
                            toggleTodo={(id)=>{console.log('toggle todo :', id);}}  /* <---[!] */
                            />
                    )
                })
            }
        </div>
    );
}
TodoList.propTypes = {
    todoList: React.PropTypes.array
}


export default TodoList;


