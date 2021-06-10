const express = require('express')
const router = express.Router();
const Web3 = require('web3');

router.get('/api/ping', (req, res) => {
    res.status(200).json({'ping': 'pong'});
});

router.get('/api/live', async (req, res) => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    const contracts = await web3.eth.getAccounts();
    res.status(200).json(contracts);
});

module.exports = router;
