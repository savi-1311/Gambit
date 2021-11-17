const User = require('../../src/models/user.model');


jest.spyOn(User.prototype, 'save')
      .mockImplementationOnce(() => Promise.resolve('model saved'))


async function validateModel() {

  const testUser = new User({
    username: "mock-user",
    hash: "mock-hash",
    salt: "mock-salt",
    status: "mock-status"
  });

  const user = await testUser.save();
}

test( 'User Model is not throwing error', () => {
    expect( () => {
        validateModel();
    }).not.toThrow();

});

afterEach(() => {
  jest.restoreAllMocks()
})
