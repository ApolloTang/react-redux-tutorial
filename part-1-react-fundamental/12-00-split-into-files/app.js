import React from 'react';
import List from './list';

class App extends React.Component {
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

        const item_next = Date.now()+'';

        list_next.push(item_next);

        this.setState({
            list: list_next
        });
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


export default App;


