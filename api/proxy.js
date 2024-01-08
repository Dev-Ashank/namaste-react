const fetch = require('node-fetch');
const { SWIGGY_API_URL } = require('../src/utils/constants');

module.exports = async (req, res) => {
    try {
        const response = await fetch(SWIGGY_API_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};