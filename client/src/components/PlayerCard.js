import React from 'react';

function PlayerCard(props){
    console.log(props.players)
    return (
        <div>
            {props.players.map(player => {
                return (
                    <div key={player.id} >
                        <h1>{player.name}</h1>
                        <p>{player.country}</p>
                        <p>{player.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default PlayerCard