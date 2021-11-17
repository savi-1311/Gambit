const app = require('../../src/app');
var supertest = require('supertest'); //require supertest
const request = supertest(app); 
const Score = require('../../src/models/score.model');
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

afterEach(() => {
  jest.restoreAllMocks()
})

