const app = require('../../src/app');
var supertest = require('supertest'); //require supertest
const request = supertest(app); 
const Score = require('../../src/models/score.model');
const Profile = require('../../src/models/profile.model');
const { connect, connection } = require('mongoose');
const prodMongoURI = process.env.PROD_DATABASE_URL || '';
const devMongoURI = process.env.DEV_DATABASE_URL || '';


beforeAll(async () => {
  const mongoURI = (process.env.NODE_ENV === 'production')
  ? prodMongoURI
  : devMongoURI;
  await connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
  })
})

test("Fetch score without user", async done =>{
    const mockScore = {username: "mock-username"};
    jest.spyOn(Score, 'findOne')
    .mockImplementationOnce(() => undefined)

    const response = await request.post('/api/fetch-score').send(mockScore);
    expect(response.statusCode).toBe(401);
    done();
})

test("Fetch score success", async done =>{
    const mockRequest = {username: "mock-username"};
    const mockScore = {username: "mock-username", wins: 0, loss: 0, draw: 0};
    jest.spyOn(Score, 'findOne')
    .mockImplementationOnce(() => mockScore)

    const response = await request.post('/api/fetch-score').send(mockRequest);
    expect(response.statusCode).toBe(200);
    done();
})

test("Fetch profile without user", async done =>{
    const mockScore = {username: "mock-username"};
    jest.spyOn(Profile, 'findOne')
    .mockImplementationOnce(() => undefined)

    const response = await request.post('/api/fetch-profile').send(mockScore);
    expect(response.statusCode).toBe(401);
    done();
})

test("Fetch profile success", async done =>{
    const mockRequest = {username: "mock-username"};
    const mockProfile = {
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
    };
    jest.spyOn(Profile, 'findOne')
    .mockImplementationOnce(() => mockProfile)

    const response = await request.post('/api/fetch-profile').send(mockRequest);
    expect(response.statusCode).toBe(200);
    done();
})

test("Update profile without user", async done =>{
    const mockRequest = {username: "mock-username"};
    jest.spyOn(Profile, 'findOneAndUpdate')
    .mockImplementationOnce(() => undefined)

    const response = await request.put('/api/update-profile').send(mockRequest);
    expect(response.statusCode).toBe(401);
    done();
})

afterEach(() => {
  jest.restoreAllMocks()
})

