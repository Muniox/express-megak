const express = require('express');
const { voteOnYes, voteOnNo, voteCehck } = require('../controller/voteController')
const router = express.Router();

router
    .put('/yes', voteOnYes)

    .put('/no', voteOnNo)

    .get('/check', voteCehck);

module.exports = router;