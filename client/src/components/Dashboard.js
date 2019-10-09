import React, { Component } from 'react';
import './styles/Dashboard.css';
import ParkList from "./ParkList";

// import NextAdventure from './NextAdventure';

class Dashboard extends Component {
  state ={
    user: {},
    wishlist:[],
    parks:[],
    search: "",
    view: "dashboard"
  }

  componentDidMount(){
    fetch('/users')
      .then(response => response.json())
      .then(user => this.setState({user: user[0]}))

    fetch('/nationalParks')
    .then(response => response.json())
    .then(park => this.setState({parks: park}))

    fetch('/likes')
    .then(response => response.json())
    .then(likes => this.setState({wishlist: likes}))
  }

  onchange = e => {
    this.setState({ search : e.target.value });
  }
  
  render() {
        const {search} = this.state;
        const filteredParks = this.state.parks.filter(park=>{
          return park.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        // var item;
        const cards = filteredParks.map(item => {
            return <ParkList 
            id = {item._id}
            name = {item.name}
            image = {item.image}
            location = {item.location}
     />
          });


      return (
        <div className = 'body'>
            <div className = 'banner'>Discover National Parks</div>
                <div className = 'dashboard'>
                <input type="text" placeholder="Search for a National Park" onChange={this.onchange} className="search"/> 
                    <div className = 'main'>
                        {/* {item} */}
                        {cards}
                    </div>
            
            </div>
        </div>
        );
}
}

export default Dashboard;