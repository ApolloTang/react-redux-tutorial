import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

    // With array iteration

    render() {
        return (
            <div>
                {
                    ['1','2','3','4'].map( item => {
                        const key = Math.random();
                        console.log(`key: ${key}, item: ${item}`);
                        return(
                            <div key={key} >{item}</div>
                        );
                    })
                }
            </div>
        );
    }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
