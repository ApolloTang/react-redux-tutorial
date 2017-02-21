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

        this._model = [];
    }

    componentDidMount() {
    }

    handle_addModelItem() {
        const _id = Date.now();
        this._model.push({id:_id, value:_id+''})
        console.log('handle_addModelItem model:', JSON.stringify(this.model));
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addModelItem}>Add model </button>
                {
                    this.model.map( function generateItem(item, index){
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
