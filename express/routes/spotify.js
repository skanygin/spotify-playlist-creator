var express = require('express');
var router = express.Router();
var SpotifyController = require('../controllers/spotify');

/* GET users listing. */
router.post(
  '/addRecommendationsBySeeds',
  SpotifyController.addRecommendationsBySeeds,
);

module.exports = router;
