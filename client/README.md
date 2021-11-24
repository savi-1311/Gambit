## :ballot_box_with_check: Prerequisites
- Node.js (version 12+)
- npm (version 6+)
- MongoDB (version 4+)
- Redis (version 6+)
- ✅ To avail Google authentication feature:
  - Google Client ID

## :arrow_down: Local Setup

```bash
$ git clone https://github.com/savi-1311/Gambit

# navigate to the project's directory
$ cd Gambit

# install the dependencies for both client and server
$ npm run setup

# install server dependencies
$ cd client && npm install
```

## :construction: Local Environment Variables

For running this project locally :truck:, you need to setup and define the environment variables for both the client as well as the server.

Create `.env` files in both `client` and `server` folder with the following variables:
- Client:
	- `NODE_ENV=development`
	- `CI=false`
	- `REACT_APP_DEV_API_URL=http://localhost:8000/api/`
	- `REACT_APP_GOOGLE_CLIENT_ID=<your-google-client-id>`


**Default Ports:**
- React (or Client) - 3000

**Note:** In order to run the client (properly), you need to have the server running at port 8000. 

## :cyclone: Run the Project

```bash
# running locally
$ cd client
$ npm start
```

## ⚙️ Testing the Project Locally

```bash
$ cd client
$ npm run test
```

