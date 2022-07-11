const express = require('express');
const router = express.Router();


router.get('/a', (req, res) => {
    res.json({ message: 'działa!' });
});

module.exports = router;