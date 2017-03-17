import React from 'react';
import {render} from 'react-dom';


const Item = function(props) {
    console.log('Item:props: ', props );
    return (
        <div>
            {props.value}
        </div>
    );
};

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.handle_addModelItem = this.handle_addModelItem.bind(this);

        this.state = {
            model: []
        }
    }

    handle_addModelItem() {
        const _id = Date.now().toString();

        const model_prev = this.state.model;
        const newItem = {
            id: _id,
            value: _id
        };
        const model_next = [].concat(model_prev, newItem);

        console.log('handle_addModelItem model_prev:', JSON.stringify(model_prev, null, 4));
        console.log('handle_addModelItem model_next:', JSON.stringify(model_next, null, 4));

        console.log('previous model !== next model: ', model_prev === model_next );
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addModelItem}>Add item</button>
                {
                    this.state.model.map( function generateItem(item, index){
                        return(
                            <Item key={index} id={item.id} value={item.value} />
                        );
                    })
                }
            </div>
        )
    }
}

const reactContainer = document.getElementById('react-container');
render(<Root />, reactContainer);
