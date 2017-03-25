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


class MyComponent extends React.Component {
    constructor(props) {
        super();

        this.handle_addItem = this.handle_addItem.bind(this);

        this.state = {
            list: []
        };
    }

    handle_addItem() {
        const list_prev = this.state.list;
        const list_next = list_prev;

        const item_next = Date.now()//+'';

        list_next.push(item_next);

        this.setState({
            list: list_next
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addItem} >Add Item</button>
                {/* <List list={this.state.list} /> */}
                <List list={1234} />
            </div>
        );
    }
};


const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);;




{/* -----------------------------------------------------------------------------


*/}
