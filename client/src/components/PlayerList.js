import React from 'react';

class PlayerList extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(result => { console.log(result); this.setState({ players: result }) })
            .catch(err => console.log('Error fetching players.', err));
    }

    render() {
        return (
            <div className="playerList">
                    
                    
                    {/* {this.state.players.map((item) => <p className="player-box">Name: {item.name}<br></br>Country: {item.country}<br></br>Searches: {item.searches}<br></br>Id: {item.id}</p>)} */}

                    {this.state.players.map((item) => <div className="player-box"><p className='card-bold'>Name: {item.name}</p><p>Country: {item.country}</p><p>Search: {item.searches}</p><p>Id: {item.id}</p></div>)}
                    
            </div>
        );
    }
}

export default PlayerList; 