import React from 'react';
import {render} from 'react-dom';

const Item = function(props) {
    console.log('Item:props: ', props );
    return (
        <div>
            {props.item}
        </div>
    );
};

class Root extends React.Component {
    constructor(props) {
       super(props);
       this.model = [1,2,3,4];
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {
                    this.model.map( function generateItem(item, index){
                        return(
                            <Item key={index} item={item} />
                        );
                    })
                }
            </div>
        )
    }
}

const reactContainer = document.getElementById('react-container');
render(<Root />, reactContainer);
