import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {
    constructor() {
       super();
    }

    render() {
        return (
           <div>
                {[
                    <div key={1} >1</div>,
                    <div key={2} >2</div>,
                    <div key={3} >3</div>,
                    React.createElement('div', {key:4}, '4')
                    /* jsx element get transpile to js like above */
                ]}
            </div>
        );
    }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
