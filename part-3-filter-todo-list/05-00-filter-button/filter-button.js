import React from 'react';

const FilterButton = (props) => {
    return (
        <button onClick={()=>props.selectFilter(props.filterType)} >
            {props.children}
        </button>
    )
}
FilterButton.proptypes = {
    selectFilter: React.PropTypes.func,
    filterType: React.PropTypes.string
}

export default FilterButton;
