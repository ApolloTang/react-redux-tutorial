import React from 'react';

const FilterButton = (props) => {
    console.log(props.currentFilter);             // <---- [!]

    return (
        <button onClick={()=>props.selectFilter(props.filterType)} >
            {props.children}
        </button>
    )
}
FilterButton.proptypes = {
    currentFilter: React.PropTypes.string,         // <---- [!]
    selectFilter: React.PropTypes.func,
    filterType: React.PropTypes.string
}

export default FilterButton;
