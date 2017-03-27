import React from 'react';
import reactDom from 'react-dom';
import _ from 'lodash';

class Store {
    constructor() {
        this.dispatch=this.dispatch.bind(this);
        this.subscribe=this.subscribe.bind(this);
        this.getState=this.getState.bind(this);

        this.storeState = {
            todos:[]
        };

        this._listeners = [];
    }
    _storeChange(actionType) {
        console.log('--------------------------------------------');
        console.log('Store changed, actionType: ', actionType);
        console.log('storeState: ', this.storeState)
        this._listeners.forEach( listener=>{ listener(); } );
    }

    ////////////////////
    // public methods //
    ////////////////////
    dispatch( _action ) {
        const type = _action.type;
        const payload = _action.payload;
        const storeState = this.storeState;
        switch (type){
            case 'ADD_TODO': {
                const _text = payload.text;

                const _id = Date.now().toString();

                const _todos_prev = storeState.todos;
                const _todo_new = { id: _id, text: _text, isDone: false };

                const _todos_next = [
                    ..._todos_prev,
                    _todo_new
                ];

                this.storeState.todos = _todos_next;
                this._storeChange('ADD_TODO');
            }
            break;
            case 'DELETE_TODO': {
                const _id = payload.id;
                const _todos_prev = storeState.todos;
                const _todos_next = _todos_prev.filter( item=>_id !== item.id );

                this.storeState.todos = _todos_next;
                this._storeChange('DELETE_TODO');
            }
            break;
            case 'TOGGLE_TODO': {
                const _id = payload.id
                const _todos_prev = this.storeState.todos;
                const _todos_next = _todos_prev.map( todo_prev=>{
                    let todo_next;
                    if ( _id === todo_prev.id ) {
                        todo_next = {
                            ...todo_prev,
                            isDone: !todo_prev.isDone
                        }
                    } else {
                        todo_next = todo_prev;
                    }
                    return todo_next
                });
                this.storeState.todos = _todos_next;
                this._storeChange('TOGGLE_TODO');
            }
            break;
            default: {
                console.warn(`Dispatch action type ${type} unmatched`)
                // do nothing
            }
        }
    }

    subscribe(_listerner_new){
        const that = this;
        this._listeners.push(_listerner_new);
        const removeListener = function() {
            that._listeners = that._listeners.filter( listener => (listener!==_listerner_new) );
        };
        return removeListener;
    }
    getState() {
        return this.storeState;
    }
};


const TodoItem = function(props) {
    const textStyle = {
        display:'inline-block',
        width: '170px',
        textDecoration: (props.todo.isDone) ? 'line-through' : 'none'
    }
    return (
        <div>
            <span style={{display:'inline-block', width:'100%'}}>
                <span
                    onClick={ ()=>props.toggleTodo(props.todo.id) }
                    style={textStyle}> {props.todo.text} </span>
                <button onClick={ ()=>props.deleteTodo(props.todo.id) }> delete </button>
            </span>
        </div>
    );
};

const TodoCollection = function(props) {
    return (
        <div>
            {
                props.todos.map( (todo, index) => {
                    return(
                        <TodoItem
                            key={index}
                            todo={todo}
                            deleteTodo={props.deleteTodo}
                            toggleTodo={props.toggleTodo}
                        />
                    );
                })
            }
        </div>
    )
};

class TodoAdder extends React.Component {
    constructor(props) {
        super(props);
        this.handle_inputChange = this.handle_inputChange.bind(this);
        this.handle_keyUp = this.handle_keyUp.bind(this);
        this.state={
            inputText: ''
        }
    }
    handle_inputChange(e) {
        const text = e.target.value;
        this.setState({ inputText: text })
    }
    handle_keyUp(e) {
        const RETURN = 13;
        const keyCode = e.keyCode;
        if (keyCode === RETURN) {
            this.props.addTodo(this.state.inputText);
            this.setState({ inputText: ''});
        }
    }
    render() {
        return(
            <input type="text"
                onChange={this.handle_inputChange}
                onKeyUp={this.handle_keyUp}
                value={this.state.inputText}
            />
        )
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handle_addTodo = this.handle_addTodo.bind(this);
        this.handle_deleteTodo = this.handle_deleteTodo.bind(this);
        this.handle_toggleTodo = this.handle_toggleTodo.bind(this);
    }
    handle_addTodo(text) {
        // this.props.action_addTodo(text);
        this.props.dispatch({
            type: 'ADD_TODO',
            payload: {text}
        });
    }
    handle_deleteTodo(id) {
        // this.props.action_deleteTodo(id);
        this.props.dispatch({
            type: 'DELETE_TODO',
            payload: {id}
        });
    }
    handle_toggleTodo(id) {
        // this.props.action_toggleTodo(id);
        this.props.dispatch({
            type: 'TOGGLE_TODO',
            payload: {id}
        });
    }
    render() {
        return (
            <div>
                <TodoAdder addTodo={this.handle_addTodo}/>
                <TodoCollection
                    todos={this.props.store.todos}
                    deleteTodo={this.handle_deleteTodo}
                    toggleTodo={this.handle_toggleTodo}
                />
            </div>
        )
    }
}


const reactContainer = document.getElementById('react-container');

const renderView =  _store => {
    reactDom.render(
        <TodoApp
            store={_store.getState()}
            dispatch={_store.dispatch}
            action_addTodo={_store.action_addTodo}
            action_deleteTodo={_store.action_deleteTodo}
            action_toggleTodo={_store.action_toggleTodo}
        />,
        reactContainer
    );
};


const connectStore = function(_store) {
    return function() {
        renderView( _store );
    };
}

const store = new Store;
window.s = store;

const updateApp = connectStore(store);

updateApp();
const removeSubscription = store.subscribe( updateApp );

