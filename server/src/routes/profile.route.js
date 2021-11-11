const { Router } = require('express');
const passport = require('passport');
const { fetchProfile, updateProfile } = require('../controllers/profile.controller');
const { fetchScore} = require('../controllers/leaderboard.controller');
const profileRouter = Router();

// Profile router for handling requests from clients
profileRouter.post('/fetch-profile', fetchProfile);
profileRouter.post('/fetch-score', fetchScore);
profileRouter.put('/update-profile', passport.authenticate('jwt', { session: false }), updateProfile);

module.exports = profileRouter;