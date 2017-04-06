import React from 'react';

const FilterButton = (props) => {
    const isActive = props.currentFilter === props.filterType;                  // <---- [!]
    let style = (isActive) ? {background: 'red'} : {background: 'white'};       // <---- [!]
    style = {...style, outline:'none' };                                        // <---- [!]

    return (
        <button
            className = {isActive ? 'is-active' : '' }                         /* <---- [!] */
            style = {style}                                                    /* <---- [!] */
            onClick={()=>props.selectFilter(props.filterType)} >
            {props.children}
        </button>
    )
}
FilterButton.proptypes = {
    currentFilter: React.PropTypes.string,
    selectFilter: React.PropTypes.func,
    filterType: React.PropTypes.string
}

export default FilterButton;
