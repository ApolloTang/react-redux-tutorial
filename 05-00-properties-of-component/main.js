import React from 'react';
import reactDOM from 'react-dom';


class Item extends React.Component {

    constructor(props) {
        super(props);
        console.log('Item.Constructor(): this.props: ', this.props);  // this.props = props
    }

    render() {
        return (
            <div>{this.props.item}</div>
        );
    }
}


class MyComponent extends React.Component {

    constructor(props) {
        super(); //<--- props did not pass into super
        console.log('MyComponent.Constructor(): this.props: ', this.props); // this.props = undefined b/c props did not pass into super
    }

    render() {
        console.log('MyComponent.render(): props: ', this.props);
        return (
            <div>
                {
                    this.props.list.map(
                        (item, index) => <Item key={index} item={item} />
                    )
                }
            </div>
        );
    }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent list={['1','2','3','4']} />, reactContainer);;
