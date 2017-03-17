import React from 'react';
import {render} from 'react-dom';

class Root extends React.Component {
    constructor(props) {
       super(props);
    }

    componentDidMount() {
        console.log(Date.now(), 'componentDidMount: ', )
    }

    render() {
        console.log(Date.now(), 'render: ')
        return (
            <div>
                {[
                    <div key={1}>1</div>,
                    <div key={2}>2</div>,
                    <div key={3}>3</div>,
                    React.createElement('div', {key:4}, '4')
                ]}
            </div>
        )
    }
}

const reactContainer = document.getElementById('react-container');
render(<Root />, reactContainer);
