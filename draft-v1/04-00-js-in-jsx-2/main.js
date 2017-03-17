import React from 'react';
import {render} from 'react-dom';

class Root extends React.Component {
    constructor(props) {
       super(props);
    }

    render() {
        return (
            <div>
                {
                    [1,2,3,4].map( function generateItem(item, index){
                        console.log('generateItem: ', index, item );
                        return( <div key={index}>{item}</div> );
                    })
                }
            </div>
        )
    }
}

const reactContainer = document.getElementById('react-container');
render(<Root />, reactContainer);
