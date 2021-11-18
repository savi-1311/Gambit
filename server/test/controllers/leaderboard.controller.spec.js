const {updateScore, fetchScore} = require('../../src/controllers/leaderboard.controller');
const Score = require('../../src/models/score.model');
const Game = require('../../src/models/game.model');

jest.spyOn(Score, 'findOneAndUpdate')
      .mockImplementation(() => Promise.resolve('score updated'));

const mockGame = {createdBy: {username: "mock-username"}, joinedBy: {username: "mock-username"}};

jest.spyOn(Game, 'findOne')
      .mockImplementation(() => mockGame);


test( 'updateScore does not throw any error when user1 wins', () => {
    const gameState = {result: "checkmate", turn: "w"};
    expect( () => {
        updateScore("mock-game-id", gameState);
    }).not.toThrow();
});

test( 'updateScore does not throw any error when user2 wins', () => {
    const gameState = {result: "checkmate", turn: "b"};
    expect( () => {
        updateScore("mock-game-id", gameState);
    }).not.toThrow();
});

test( 'updateScore does not throw any error when draws', () => {
    const gameState = {result: "timeout", turn: "b"};
    expect( () => {
        updateScore("mock-game-id", gameState);
    }).not.toThrow();
});