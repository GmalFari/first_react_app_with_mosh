import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:this.props.value,
     };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement =(product) => { // Arrow function solve manually adding constractor to method
        console.log(product);
        this.setState({count:this.state.count + 1})
    }

    render() { 
        return( 
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            
            <button onClick={() =>this.handleIncrement("product")} className='btn btn-secondary'>Increment </button>
            </div>
           
            );
    }
    getBadgeClasses(){
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? "warning": "primary"
    return classes;
    }

formatCount(){
    let counter = this.state.count
    return counter  === 0 ? "Zero":counter 
}

}
 
export default Counter;