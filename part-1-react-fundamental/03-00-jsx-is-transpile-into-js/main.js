import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

    // JXS is transpile into JS behind the scene

    render() {
        return React.createElement(
            "div", null,
            React.createElement( "div", null, "1" ),
            React.createElement( "div", null, "2" ),
            React.createElement( "div", null, "3" ),
            React.createElement( "div", null, "4" )
        );
    }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
