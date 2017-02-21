import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash';


const Item = function(props) {
    return (
        <div>
            <span>
                <span> {props.value} </span>
                <span onClick={ ()=>props.handle_deleteModelItem(props.id) }> [ delete ] </span>
            </span>
        </div>
    );
};


class Root extends React.Component {
    constructor(props) {
        super(props);
        this.handle_addModelItem = this.handle_addModelItem.bind(this);
        this.handle_deleteModelItem = this.handle_deleteModelItem.bind(this);

        this._model = [];

        this.state = {
            timeStamp: Date.now()
        };
    }

    handle_addModelItem() {
        const _id = Date.now();
        this._model.push({id:_id, value:_id+''});

        this.setState({timeStamp:_id});
    }

    handle_deleteModelItem(id) {
        _.remove(this._model, item=>{
            return id === item.id;
        });

        this.setState({timeStamp:Date.now()});
    }

    render() {
        return (
            <div>
                <button onClick={this.handle_addModelItem}>Add model </button>
                {
                    this._model.map( (item, index) => {
                        return(
                            <Item
                                key={index}
                                id={item.id}
                                value={item.value}
                                handle_deleteModelItem={this.handle_deleteModelItem}
                                />
                        );
                    })
                }
            </div>
        )
    }
}

const reactContainer = document.getElementById('react-container');
render(<Root />, reactContainer);
