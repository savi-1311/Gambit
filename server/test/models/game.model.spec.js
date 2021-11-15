const Game = require('../../src/models/game.model');


jest.spyOn(Game.prototype, 'save')
      .mockImplementationOnce(() => Promise.resolve('model saved'))


async function validateModel() {

  const testGame = new Game({
      createdBy: "mock-user1",
      joinedBy: "mock-user2",
      state: "mock-state",
      outcome: 'NA'
    });

  const game = await testGame.save();
}

test( 'Game Model is not throwing error', () => {
    expect( () => {
        validateModel();
    }).not.toThrow();

});