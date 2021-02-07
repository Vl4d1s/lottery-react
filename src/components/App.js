import React, { useState, useEffect } from "react";
import web3 from "./web3";
import lottery from "./lottery";
import Form from "./Form";
import WinnerPick from "./WinnerPick";
import Content from "./Content";
import Loader from "./Loader";

const App = () => {
  const [managerAddress, setManagerAddress] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [contractAccountBalance, setContractAccountBalance] = useState("");
  const [players, setPlayers] = useState([]);
  const [messege, setMessege] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const ethereum = window.ethereum;

  useEffect(() => {
    const func = async () => {
      console.log("func");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      const managerAddress = "0x96c54C87e1BEfe77912C73b205e8A43714266548";

      const contractAccountBalance = await web3.eth.getBalance(
        lottery.options.address
      );

      const contractAccountBalanceInEther = web3.utils.fromWei(
        contractAccountBalance,
        "ether"
      );

      const contractAddress = await lottery.options.address;

      const numOfPlayers = await lottery.methods.getPlayerCount().call();

      setManagerAddress(managerAddress);
      setContractAddress(contractAddress);
      setContractAccountBalance(contractAccountBalanceInEther);
      setPlayers(numOfPlayers);
      setUserAddress(accounts[0]);
    };

    func();
  }, []);

  useEffect(() => {
    const isAccountsChanged = async () => {
      console.log("isAccountsChanged");

      console.log("User:", userAddress);
      console.log("Manager:", managerAddress);

      ethereum.on("accountsChanged", async () => {
        const accounts = await web3.eth.getAccounts();

        setUserAddress(accounts[0]);
      });
    };
    isAccountsChanged();
  }, [userAddress]);

  const onSubmit = async (term) => {
    setMessege("Waitin on transaction success...");
    await lottery.methods.enter().send({
      from: userAddress,
      value: web3.utils.toWei(term, "ether"),
    });
    setContractAccountBalance(
      parseFloat(contractAccountBalance) + parseFloat(term)
    );
    setMessege("You have been entered!");
  };

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();
    setMessege("Waitin on transaction success...");
    await lottery.methods.pickWinner().send({
      from: managerAddress,
    });
    setMessege("Winner has been picked!");
  };

  const renderContent = () => {
    if (userAddress !== "" && contractAddress !== "") {
      return (
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <Content
                contractAddress={contractAddress}
                userAddress={userAddress}
                managerAddress={managerAddress}
                players={players}
                contractAccountBalance={contractAccountBalance}
              />
            </div>
            <div className="five wide column">
              <Form onSubmit={onSubmit} />
              {userAddress === managerAddress ? (
                <div>
                  <WinnerPick onClick={onClick} />
                </div>
              ) : null}
            </div>
          </div>

          <div class="ui divider"></div>
          <h1>{messege}</h1>
        </div>
      );
    }
    return <Loader />;
  };

  return (
    <div style={{ marginTop: "50px" }} className="ui container">
      {renderContent()}
    </div>
  );
};

export default App;
