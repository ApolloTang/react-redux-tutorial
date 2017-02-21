import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash';


const Item = function(props) {
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

        this.state = {
            timeStamp: Date.now()
        };
    }

    componentDidMount() {
    }

    handle_addModelItem() {
        const _id = Date.now();
        this._model.push({id:_id, value:_id+''});

        this.setState({timeStamp:_id});
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addModelItem}>Add model </button>
                {
                    this._model.map( function generateItem(item, index){
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
