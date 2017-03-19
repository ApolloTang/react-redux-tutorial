import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

    // JXS's array item must have key attribute with unique value

    render() {
        return (
           <div>
                {[
                    <div key={1} >1</div>,
                    <div key={2} >2</div>,
                    <div key={3} >3</div>,
                    React.createElement('div', {key:4}, '4')
                ]}
            </div>
        );
    }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);