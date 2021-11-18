const sendMail = require('../../src/services/email.service');
const nodemailer = require("nodemailer");


jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockReturnValue((mailoptions, callback) => {})
  })
}));

test( 'Email service does not throw any error', () => {
    expect( () => {
        sendMail();
    }).not.toThrow();
});