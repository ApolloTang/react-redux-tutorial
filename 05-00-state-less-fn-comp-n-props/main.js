import React from 'react';
import reactDOM from 'react-dom';


const Item = (props) => <div>{props.item}</div>;

class MyComponent extends React.Component {
    constructor() {
       super();
    }

    render() {
        return (
            <div>
                {
                    ['1','2','3','4'].map(
                        (item, index) => <Item key={index} item={item} />
                    )
                }
            </div>
        );
    }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);;
