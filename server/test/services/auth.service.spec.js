const {createPassword,checkPassword, issueJWT} = require('../../src/services/auth.service');

const mockUser = {_id: "1234"};

async function validatePassword(callback) {
    try{
        let password = await createPassword("mock-password");
        callback(password);
    }catch(err)
    {
        console.log(err);
    }
}

async function validateJwt(callback) {
    try{
        let result = await issueJWT(mockUser);
        callback(result);
    }catch(err)
    {
        console.log(err);
    }
}


test( 'createPassword does not throw any error', () => {
    expect( () => {
        createPassword("mock-password");
    }).not.toThrow();
});

test( 'Correct password returns true', (done) => {
    validatePassword( (password) => {
        try{
            expect(checkPassword("mock-password", password.hash, password.salt)).toBe(true);
            done();
        } catch (error) {
          done(error);
      }
  });
});

test( 'Wrong password returns false', (done) => {
    validatePassword( (password) => {
        try{
            expect(checkPassword("wrong-password", password.hash, password.salt)).toBe(false);
            done();
        } catch (error) {
          done(error);
      }
  });
});

test( 'JWT token created successfully', (done) => {
    validateJwt( (result) => {
        try{
            expect(result.expires).toBe('1d');
            expect(result.token).toEqual(expect.stringMatching(/^Bearer/));
            done();
        } catch (error) {
          done(error);
      }
  });
});

afterEach(() => {
  jest.restoreAllMocks()
})
