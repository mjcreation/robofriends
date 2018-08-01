import React, {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import {robots} from './robots';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        // this.state.searchfield = event.target.value;
        this.setState({searchfield: event.target.value});
    }
    render(){
        const filter = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return(
    <div className='tc'>
        <h2>Robo-Friends</h2>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filter}/>
    </div>
    );
    }

}

export default App;