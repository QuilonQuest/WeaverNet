//Get NFT metadata from chain
const web3ApiKey = 'DAFKQtdXVuQETVaX7zyJFVy7ZetNngkMMgJOt8vKJrtfePTJXkfIPSOsaaG0Igvy';
const options = {
  method: 'GET',
  params: {
    chain: '0x2a15c308d',
  },
  headers: {
    accept: 'application/json',
    'X-API-Key': web3ApiKey
  }
};
fetch('https://deep-index.moralis.io/api/v2/nft/0x19D4F9A260AF1d7E0E99A32DBe418956af875c25/82789076105303867564595430104454069497307132242678459595482236645708760809276', options)
  .then((res) => res.json())
  .then((data) => console.log(data));
  .catch((error)=>console.log(error));
