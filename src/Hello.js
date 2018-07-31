import React, { Component } from 'react';
import './Hello.css';

class HelloC1 extends Component {
    render(){
        return (
            <div className="f2 tc">
                <h2> {this.props.greeting} </h2>
            </div>
        );
    }
}

export default HelloC1;