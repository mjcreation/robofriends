import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import {robots} from '../components/robots';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        // this.state.searchfield = event.target.value;
        this.setState({searchfield: event.target.value});
    }
    render(){
        const {robots, searchfield} = this.state;
        const filter = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // if (robots.length === 0)
        return !robots.length ?
            <h2 className='tc'>Loading_Wait...</h2>
        :
            (
            <div className='tc'>
                <h2>Robo-Friends</h2>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filter}/>
                </Scroll>
            </div>
            );
        }
    componentDidMount(){
        this.setState({robots: robots});
}
}

export default App;