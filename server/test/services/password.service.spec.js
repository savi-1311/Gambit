const savePassword = require('../../src/services/password.service');
const User = require('../../src/models/user.model');
const utils = require('../../src/services/auth.service');

const UserFindResult = "mock-user";
const saltHashResult = {
    salt: "mock-salt",
    hash: "mock-hash"
}

jest.spyOn(User, 'findOneAndUpdate')
.mockImplementationOnce(() => UserFindResult)

jest.spyOn(utils, 'createPassword')
.mockImplementationOnce(() => saltHashResult)


test( 'PasswordService does not throw any error', () => {
    expect( () => {
        savePassword();
    }).not.toThrow();

});