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

        this._cache = {};                                      // [3]
    }

    componentDidMount() {
        const data_clone = [].concat(this.props.data);         // [4]
        this._cache.data = data_clone;
    }

    handle_addItem() {
        const list_prev = this.state.list;
        const list_prev_clone = [ ...list_prev ];              // [5][6]
        const list_next = list_prev_clone;

        const item_next = this._cache.data.shift();

        if ( item_next ) {
            list_next.push(item_next);
            this.setState({                                     // [7]
                list: list_next
            })
        }
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
reactDOM.render(<MyComponent data={['1','2','3','4']} />, reactContainer);;


{/* -----------------------------------------------------------------------------

    [1] React Class in ES6 syntex 'this' is lexical
        scope in non life cycle method, you have to manually
        bind 'this' to each one of them them.

    [2] Component internal state:
        • *NeverEver* set 'this.state' directly.
        • You can only change 'this.state' via 'this.setState()'
        • Calling 'this.setState()' will trigger render()

    [3] Component custom cache:
        • change in this cache will not trigger render()

    [4] *NeverEver* mutate props passed into the component.
        If you need to do opperation on values in props, you must
        make a copy and perform you opperation on the copy.

    [5] Make it a habbit to always clone previous state.

    [6] ES6 way of shallow copying array (spread operator).

    [7] Calling 'this.setState()' to trigger reder().

*/}
