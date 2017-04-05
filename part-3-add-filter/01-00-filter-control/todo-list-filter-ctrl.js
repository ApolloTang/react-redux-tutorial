import React from 'react';

class TodoListFilterControl extends React.Component {
    constructor(props) {
        super(props);
        this.handle_selectFilter=this.handle_selectFilter.bind(this);
    }
    handle_selectFilter(filterType) {
        this.props.selectFilter(filterType);
    }
    render() {
        return(
            <div>
                <button onClick={()=>this.handle_selectFilter('ALL')} >All</button>
                <button onClick={()=>this.handle_selectFilter('IS_DONE')} >Done</button>
                <button onClick={()=>this.handle_selectFilter('IS_NOT_DONE')} >Todo</button>
            </div>
        );
    }
}
TodoListFilterControl.propTypes = {
    selectFilter: React.PropTypes.func
}

export default TodoListFilterControl;
