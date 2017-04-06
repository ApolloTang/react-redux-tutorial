import React from 'react';

import FilterButton from './filter-button';                              // <---- [!]


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
                {/* <button onClick={()=>this.handle_selectFilter('ALL')} >All</button> */}
                {/* <button onClick={()=>this.handle_selectFilter('IS_DONE')} >Done</button> */}
                {/* <button onClick={()=>this.handle_selectFilter('IS_NOT_DONE')} >Todo</button> */}
                <FilterButton selectFilter={this.handle_selectFilter} filterType="ALL" >All</FilterButton>
                <FilterButton selectFilter={this.handle_selectFilter} filterType="IS_DONE" >Done</FilterButton>
                <FilterButton selectFilter={this.handle_selectFilter} filterType="IS_NOT_DONE" >Todo</FilterButton>
            </div>
        );
    }
}
TodoListFilterControl.propTypes = {
    selectFilter: React.PropTypes.func,
}

export default TodoListFilterControl;
