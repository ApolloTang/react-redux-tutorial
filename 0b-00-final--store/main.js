import React from 'react';
import reactDom from 'react-dom';
import _ from 'lodash';

class Store {
    constructor() {
        this.action_addTodo=this.action_addTodo.bind(this);
        this.action_deleteTodo=this.action_deleteTodo.bind(this);
        this.action_toggleTodo=this.action_toggleTodo.bind(this);
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
    action_addTodo(_text) {
        const _id = Date.now().toString();

        const _todos_prev = this.storeState.todos;
        const _todo_new = { id: _id, text: _text, isDone: false };

        const _todos_next = [
            ..._todos_prev,
            _todo_new
        ];

        this.storeState.todos = _todos_next;
        this._storeChange('action_addTodo');
    }
    action_deleteTodo(_id) {
        const _todos_prev = this.storeState.todos;
        const _todos_next = _todos_prev.filter( item=>_id !== item.id );

        this.storeState.todos = _todos_next;
        this._storeChange('action_deleteTodo');
    }
    action_toggleTodo(_id) {
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
        this._storeChange('action_toggleTodo');
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
        this._onChange = this._onChange.bind(this);

        this.state = {
            todos:[]
        };
    }
    componentDidMount() {
        this._removeStoreSubscription = this.props.store.subscribe(this._onChange);
    }
    componentWillUnmount() {
        this._removeStoreSubscription();
    }
    _onChange() {
        this.setState(store.getState());
    }
    handle_addTodo(_text) {
       this.props.store.action_addTodo(_text);
    }
    handle_deleteTodo(_id) {
        this.props.store.action_deleteTodo(_id);
    }
    handle_toggleTodo(_id) {
        this.props.store.action_toggleTodo(_id);
    }
    render() {
        return (
            <div>
                <TodoAdder addTodo={this.handle_addTodo}/>
                <TodoCollection
                    todos={this.state.todos}
                    deleteTodo={this.handle_deleteTodo}
                    toggleTodo={this.handle_toggleTodo}
                />
            </div>
        )
    }
}

const store = new Store;
const reactContainer = document.getElementById('react-container');
reactDom.render(<TodoApp store={store}/>, reactContainer);


