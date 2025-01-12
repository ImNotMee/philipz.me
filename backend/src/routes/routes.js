const express = require('express');
const { getPosts } = require('../controllers/scraperController.js');

const router = express.Router();

router.get('/test', getPosts);

module.exports = router;
