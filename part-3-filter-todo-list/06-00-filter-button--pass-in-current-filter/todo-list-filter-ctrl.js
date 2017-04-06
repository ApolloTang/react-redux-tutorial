import React from 'react';

import FilterButton from './filter-button';


class TodoListFilterControl extends React.Component {
    constructor(props) {
        super(props);
        this.handle_selectFilter=this.handle_selectFilter.bind(this);
    }
    handle_selectFilter(filterType) {
        this.props.selectFilter(filterType);
    }
    render() {
        const currentFilter=this.props.currentFilter;   // <---- [!]

        return(
            <div>
                <FilterButton currentFilter={currentFilter} selectFilter={this.handle_selectFilter} filterType="ALL" >All</FilterButton>
                <FilterButton currentFilter={currentFilter} selectFilter={this.handle_selectFilter} filterType="IS_DONE" >Done</FilterButton>
                <FilterButton currentFilter={currentFilter} selectFilter={this.handle_selectFilter} filterType="IS_NOT_DONE" >Todo</FilterButton>
                        {/*   ^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            </div>
        );
    }
}
TodoListFilterControl.propTypes = {
    selectFilter: React.PropTypes.func,
    currentFilter: React.PropTypes.string     // <---- [!]
}

export default TodoListFilterControl;
