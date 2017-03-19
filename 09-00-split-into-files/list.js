import React from 'react';
import reactDOM from 'react-dom';


const Item = (props) => <div>{props.item}</div>;
Item.propTypes = {
    item: React.PropTypes.string
}


const List = (props) => {
    const list = (Object.prototype.toString.call(props.list) === '[object Array]' ) ? props.list : [];
    return (
        <div>
            { list.map( (item, index) => <Item key={index} item={item} />) }
        </div>
    );
}
List.propTypes = {
    list: React.PropTypes.array
}


export default List;


