const Score = require('../../src/models/score.model');


jest.spyOn(Score.prototype, 'save')
      .mockImplementationOnce(() => Promise.resolve('model saved'))


async function validateModel() {

  const newScore = new Score({
    username: "mock-user",
    wins: 0,
    loss: 0,
    draw: 0
  });

  const score = await newScore.save();
}

test( 'Score Model is not throwing error', () => {
    expect( () => {
        validateModel();
    }).not.toThrow();

});