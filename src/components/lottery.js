import web3 from "./web3";

const contract_address = "0x528dB2bd264CBf5A73Ec3A6F08d55447319adaB0";

const contract_abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayerCount",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStore",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastWinner",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [[Object]],
    name: "players",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
  },
];

export default new web3.eth.Contract(contract_abi, contract_address);
