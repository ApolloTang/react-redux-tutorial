import React from 'react';
import reactDOM from 'react-dom';


class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.item}</div>
        );
    }
};


class MyComponent extends React.Component {

    constructor(props) {
        super();

        this.handle_addItem = this.handle_addItem.bind(this);  // [1]

        this.state = {                                         // [2]
            list: []
        };
    }

    handle_addItem() {
        const list_prev = this.state.list;
        const list_next = list_prev;

        const item_next = Date.now()+'';

        list_next.push(item_next);

        this.setState({                                        // [3]
            list: list_next
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addItem} >Add Item</button>
                {
                    this.state.list.map(
                        (item, index) => <Item key={index} item={item} />
                    )
                }
            </div>
        );
    }

};

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);;


{/* -----------------------------------------------------------------------------

    [1] In non life cycle method, 'this' in React Class ES6 syntex
        is lexical scope, you have to manually bind 'this' to your
        method.

    [2] • 'this.state' is this component internal state.
        • *NeverEver* set 'this.state' directly.
        • You can only change 'this.state' via 'this.setState()'.
        • Calling 'this.setState()' will trigger render().

    [3] Calling 'this.setState()' to trigger reder().

*/}
