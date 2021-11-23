const { Chess } = require('chess.js');
const { Types } = require('mongoose');
const Game = require('../models/game.model');
const Score = require('../models/score.model');

const updateScore = async (gameId, gameState) => {
	currentGame = await Game.findOne({ _id: gameId });
	createdByUsername = currentGame.createdBy.username;
	joinedByUsername = currentGame.joinedBy.username;
	if(gameState.result =='checkmate' && gameState.turn == 'w')
	{
		await Score.findOneAndUpdate({ username:  createdByUsername}, { $inc: { loss : 1 }});
		await Score.findOneAndUpdate({ username:  joinedByUsername}, { $inc: { wins : 1 }});
	}
	else if(gameState.result =='checkmate' && gameState.turn == 'b')
	{
		await Score.findOneAndUpdate({ username:  joinedByUsername}, { $inc: { loss : 1 }});
		await Score.findOneAndUpdate({ username:  createdByUsername}, { $inc: { wins : 1 }});
	}
	else
	{
		await Score.findOneAndUpdate({ username:  joinedByUsername}, { $inc: { draw : 1 }});
		await Score.findOneAndUpdate({ username:  createdByUsername}, { $inc: { draw : 1 }});
	}
};

const fetchScore = async (req, res, next) => {
  try {
    const score = await Score.findOne({ username: req.body.username });
    if (!score)
      return res
        .status(401)
        .json({
          success: false,
          msg: 'Could not find score!'
        });
        

    const { username, wins, loss, draw } = score;

    return res
      .status(200)
      .json({
        success: true,
        username,
        wins,
        loss, 
        draw,
          });

  } catch(err) {
    next(err);
  }
};

module.exports = {
  updateScore,
  fetchScore
};