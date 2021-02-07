import React from "react";
import PlayersList from './PlayersList'

const Content = (props) => {
  const {
    contractAddress,
    userAddress,
    managerAddress,
    numOfPlayers,
    contractAccountBalance,
    lastWinner,
    players
  } = props;

  return (
    <div>
      <h1 className="ui header">Lottery Contract</h1>
      <div className="paragraph">
        <div className="line">
          {`The contract address is: `}
          <a href={`https://rinkeby.etherscan.io/address/${contractAddress}`}>
            {contractAddress}
          </a>
        </div>
        <div className="line">{`Diployed to: Rinkeby Testnet Network`}</div>
        <div className="line">
          {`Your address is: `}
          <a href={`https://rinkeby.etherscan.io/address/${userAddress}`}>
            {userAddress}
          </a>
        </div>
        <div className="line">
          {`This contract is managed by: `}
          {managerAddress === userAddress ? (
            "You!"
          ) : (
            <a href={`https://rinkeby.etherscan.io/address/${managerAddress}`}>
              {managerAddress}
            </a>
          )}
        </div>
        <div className="line">
          There are currently {numOfPlayers} players entered.
        </div>
        <div className="line">
          competiong to win {contractAccountBalance} ether!
        </div>
        <div className="line">
        {`Last Winner: `}
          <a href={`https://rinkeby.etherscan.io/address/${lastWinner}`}>
            {lastWinner}
          </a>
        </div>
            <PlayersList players={players}/>
      </div>
    </div>
  );
};

export default Content;
