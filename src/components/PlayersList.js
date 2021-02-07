import React from "react";

const PlayersList = ({players}) => {
  const renderedList = players.map((player) => {
    return (
        <div class="item">
            <img class="ui avatar image" src="https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png"/>
            <div class="content">
                <a class="header" href={`https://rinkeby.etherscan.io/address/${player}`}>{player}</a> 
                <div class="description">Last seen watching just now...</div>
            </div>
        </div>
        
    );
  });

  return <div className="ui list">{renderedList}</div>;
};


export default PlayersList;