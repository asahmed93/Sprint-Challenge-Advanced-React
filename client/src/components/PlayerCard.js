import React from 'react';

function PlayerCard(props){
    console.log(props.players)
    return (
        <div>
            {props.players.map(player => {
                return (
                    <div key={player.id} >
                        <h1>{player.name}</h1>
                        <p>Country: {player.country}</p>
                        <p>Number of Searches: {player.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default PlayerCard