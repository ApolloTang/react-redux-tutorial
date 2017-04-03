import React from 'react';
import reactDOM from 'react-dom';


class Item extends React.Component {

    constructor(props) {
        super(props);                                                 // [1]
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
        super();                                                            // [1]
        console.log('MyComponent.Constructor(): this.props: ', this.props); // this.props = undefined b/c props did not pass into super
    }

    render() {
        console.log('MyComponent.render(): props: ', this.props);
        return (
            <div>
                {
                    this.props.list.map(
                        item => <Item key={Math.random()} item={item} />
                    )
                }
            </div>
        );
    }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent list={['1','2','3','4']} />, reactContainer);;



{/* ------------------------------------------------------------------------------

  Component are meant to be modularized composable unit, with properties (props)
  passed in at its interface.

                 ┌─────────────────────┐
                 │                     │               ┌──────────────┐
                 │                     │               │              │
  ──── props ───▶│   <MyComponent />   │──── props ───▶│   <Item />   │
                 │                     │               │              │
                 │                     │               └──────────────┘
                 └─────────────────────┘

  Every time properties are push into a compoenent the virtual DOM is 'flushed'.
  Behind the scene, vDOM performs its diffing algorithm to generate optimized
  instructions for fast DOM mutation.



[1] If 'props' did not pass into 'super()', then 'props' will not be available
    as 'this.props' in constructor.

*/}
