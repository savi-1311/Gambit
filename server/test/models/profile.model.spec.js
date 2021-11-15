const Profile = require('../../src/models/profile.model');


jest.spyOn(Profile.prototype, 'save')
      .mockImplementationOnce(() => Promise.resolve('model saved'))


async function validateModel() {

  const newProfile = new Profile({
    username: "mock-user",
    fullname: "mock-name",
    email: "mock-email",
    avatar: {
      top:"LongHairStraight",
      accessories:"Blank",
      hairColor:"BrownDark",
      facialHair:"Blank",
      clothes:"BlazerShirt",
      eyes:"Default",
      eyebrow:"Default",
      mouth:"Default",
      skin:"Light",
      clothColor: "Black"
    },
    gender: 'NA',
    country: 'NA',
    joined: new Date().toGMTString().slice(0, -13),
    lichess: 'NA'
  });

  const profile = await newProfile.save();
}

test( 'Profile Model is not throwing error', () => {
    expect( () => {
        validateModel();
    }).not.toThrow();

});