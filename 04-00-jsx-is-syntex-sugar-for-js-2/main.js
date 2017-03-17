import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

    // With array mapping

    render() {
        return (
            <div>
                {
                    ['1','2','3','4'].map( (item, index) => {
                        console.log(`index: ${index}, item: ${item}`);
                        return(
                            <div key={index} >{item}</div>
                        );
                    })
                }
            </div>
        );
    }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
