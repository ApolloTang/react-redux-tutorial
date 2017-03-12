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

        this.state = {
            model: [
                {id:1, value:'1'},
                {id:2, value:'2'},
                {id:3, value:'3'},
                {id:4, value:'4'}
            ]
        }
    }

    render() {
        return (
            <div>
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
