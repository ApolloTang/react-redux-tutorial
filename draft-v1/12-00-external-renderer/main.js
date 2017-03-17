import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash';


const model_external =  [
    {id:1, value:'1'},
    {id:2, value:'2'},
    {id:3, value:'3'},
    {id:4, value:'4'}
];

const Item = function(props) {
    return (
        <div>
            <span>
                <span> {props.value} </span>
                <button onClick={ ()=>props.handle_deleteModelItem(props.id) }> delete </button>
            </span>
        </div>
    );
};


class Root extends React.Component {
    constructor(props) {
        super(props);
        this.handle_addModelItem = this.handle_addModelItem.bind(this);
        this.handle_deleteModelItem = this.handle_deleteModelItem.bind(this);

        this.state = {
            model: []
        }
    }

     handle_addModelItem() {
        // const _id = Date.now().toString();
        //
        // const model_prev = this.state.model;
        // const newItem = {
        //     id: _id,
        //     value: _id
        // };
        // const model_next = [].concat(model_prev, newItem);
        //
        // console.log('handle_addModelItem model_prev:', JSON.stringify(model_prev, null, 4));
        // console.log('handle_addModelItem model_next:', JSON.stringify(model_next, null, 4));
        //
        // console.log('previous model !== next model: ', model_prev === model_next );
        //
        // this.setState({model: model_next});
    }

    handle_deleteModelItem(id) {
        // const model_prev = this.state.model;
        // const model_next = model_prev.filter( item => (id !== item.id) )
        //
        // console.log('handle_deleteModelItem model_prev:', JSON.stringify(model_prev, null, 4));
        // console.log('handle_deleteModelItem model_next:', JSON.stringify(model_next, null, 4));
        //
        // console.log('previous model !== next model: ', model_prev === model_next );
        //
        // this.setState({model: model_next});
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {/* <button onClick={this.handle_addModelItem}>Add item</button> */}
                {
                    /* this.state.model.map( (item, index) => { */
                    this.props.model.map( (item, index) => {
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
const externalRender = function() {
    render(<Root model={model_external}/>, reactContainer);
};

const externalButton = document.createElement('button')
externalButton.innerText = 'Add model via props';
document.getElementsByTagName('body')[0].appendChild( externalButton );

externalButton.addEventListener('click', (e)=>{
    console.log('click');
    externalRender()
});


