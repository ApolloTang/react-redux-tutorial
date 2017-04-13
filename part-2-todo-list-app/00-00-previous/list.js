import React from 'react';




const Item = (props) => <div>{props.item}</div>;
Item.propTypes = {
    item: React.PropTypes.string
}


const List = (props) => {
    const list = (Object.prototype.toString.call(props.list) === '[object Array]' ) ? props.list : [];

    return (
        <div>
            { list.map( item => <Item key={item} item={item} />) }
        </div>
    );
}
List.propTypes = {
    list: React.PropTypes.array
}


export default List;


