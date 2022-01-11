# Server-Side Documentation
## :ballot_box_with_check: Prerequisites
- Node.js (version 12+)
- npm (version 6+)
- MongoDB (version 4+)
- Redis (version 6+)
- ✅ To avail Google and LiChess authentication feature (Can work locally even without these- Gambit Authentication only):
  - Google Client ID and Secret Token
  - LiChess Client ID and Secret Token

## :arrow_down: Local Setup

```bash
$ git clone https://github.com/savi-1311/Gambit

# navigate to the project's directory
$ cd Gambit

# install the dependencies for both client and server
$ npm run setup

# install server dependencies
$ cd server && npm install
```

## :construction: Local Environment Variables

For running this project locally :truck:, you need to setup and define the environment variables for both the client as well as the server.

Create `.env` files in both `client` and `server` folder with the following variables:
- Client:
	- `NODE_ENV=development`
	- `CI=false`
	- `REACT_APP_DEV_API_URL=http://localhost:8000/api/`
	- `REACT_APP_GOOGLE_CLIENT_ID=<your-google-client-id>`

- Server:
	- `NODE_ENV=development`
	- `DEV_CLIENT_URL=http://localhost:3000`
  	- `PUBLIC_KEY=<your-rsa-public-key>`
  	- `PRIVATE_KEY=<your-rsa-private-key>`
	- `DEV_DATABASE_URL=mongodb://127.0.0.1:27017/gambit`
	- `DEV_STORAGE_URL=127.0.0.1:6379`
	- `DEV_STORAGE_PSWD=<your-redis-instance-pswd>`
	- `EMAIL=<your-google-oauthplayground-mail-id>`
	- `GOOGLE_CLIENT_ID=<your-google-client-id>`
	- `GOOGLE_CLIENT_SECRET=<your-google-client-secret>`
	- `GOOGLE_REFRESH_TOKEN=<your-google-oauthplayground-refresh-token>`
	- `DEV_LICHESS_CLIENT_ID=<your-lichess-client-id>`
	- `DEV_LICHESS_CLIENT_SECRET=<your-lichess-client-secret>`

*Note: Change DEV to PROD prefix for deploying it to the production.*

**Default Ports:**
- React (or Client) - 3000
- Node.js (or Server) - 8000
- MongoDB (or Database) - 27017
- Redis (or In-memory DS) - 6379

**Note:** In order to run the client (properly), you need to have the server running at port 8000. Similarly, to run the server (propely), you need both MongoDB and Redis running at default ports 27017 and 6379 respectively. 

For authentication using JWT, you must generate your rsa keys seperately and store them in environment variables, like so: 
```bash
$ node server/src/services/keys.service.js generate
```
⚠️ Before using the keys in your .env files, make sure to replace all line breaks with "\n" and create a single-lined string.

## :cyclone: Run the Project

```bash
# running locally
$ npm run dev
```

## ⚙️ Testing the Project Locally

```bash
$ npm run test
```
⚠️ Ensure MongDB server and Redis Server are running properly before testing. Port 8000 should also **not** be in use before running the tests as for certian API Endpoint tests server will be started.
