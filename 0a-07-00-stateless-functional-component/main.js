import React from 'react';
import reactDOM from 'react-dom';


// Stateless functional component are pure function
const Item = (props) => <div>{props.item}</div>;

const List = (props) => {
    const list = (props.list) ? props.list : [];
    return (
        <div>
            { list.map( (item, index) => <Item key={index} item={item} />) }
        </div>
    );
}





class MyComponent extends React.Component {

    constructor(props) {
        super();

        this.handle_addItem = this.handle_addItem.bind(this);

        this.state = {
            list: []
        };

        this._cache = {};
    }

    componentDidMount() {
        const data_clone = [].concat(this.props.data);
        this._cache.data = data_clone;
    }

    handle_addItem() {
        const list_prev = this.state.list;
        const list_prev_clone = [ ...list_prev ];
        const list_next = list_prev_clone;

        const item_next = this._cache.data.shift();

        if ( item_next ) {
            list_next.push(item_next);
            this.setState({
                list: list_next
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addItem} >Add Item</button>
                <List list={this.state.list} />
            </div>
        );
    }

};

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent data={['1','2','3','4']} />, reactContainer);;


{/* -----------------------------------------------------------------------------


*/}
