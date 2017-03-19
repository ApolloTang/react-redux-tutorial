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
        super();                                                            // [1] props did not pass into super
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



{/* ------------------------------------------------------------------------------

  Component are meant to be modularized composable unit, with properties (props)
  passed in as its interface.

                 ┌─────────────────────┐
                 │                     │               ┌──────────────┐
                 │                     │               │              │
  ──── props ───▶│   <MyComponent />   │──── props ───▶│   <Item />   │
                 │                     │               │              │
                 │                     │               └──────────────┘
                 └─────────────────────┘

  Everything properties are push into a compoenent the virtual DOM is flushed.
  Behind the scene, vDOM performs its diffing algorithm to generate optimized
  instructions for fast DOM mutation.



[1] If prop did not pass into super(), it will not be available as "this.props" in
    constructor; however, it will still be avaialble in React.Component life
    cycle method. So, if you need to access to props in constructor, you need to
    pass it to super().


*/}
