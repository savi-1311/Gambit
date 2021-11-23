import React from 'react';
import io from 'socket.io-client';

import './lobby.css';

<<<<<<< HEAD
import Game from '../game/game';
=======
import { PlayGame, SpectateGame } from '../game/game';
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
import configAPI from '../../configs/api.config';
import AuthService from '../../services/auth.service';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import Spinner from 'react-bootstrap/Spinner';
=======
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb

import CreateGame from './create-game';
import JoinGame from './join-game';

const API_URL = configAPI();

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: AuthService.getCurrentUser(), // holds the logged-in user's info 
      socket: undefined,    // set to the socket connection when the lobby loads up
      creating: false,      // set to true when user clicks `Create` for the first time
      joining: false,       // set to true when user clicks `Join` for the first time
<<<<<<< HEAD
      loading: false,       // set to true when user clicks `Create` or `Join` after configuring options
      status: false,        // set to true when a game gets started
      gameId: undefined,    // same as userId of the game's creator
      player1: undefined,   // user who creates a game
      player2: undefined,    // user who joins the game
      timerDetails: {
        category: 'Blitz',
        totalTime: 1800000
      }
=======
      start: false,        // set to true when a game gets started
      spectate: false,      // set to true for spectating a game
      gameId: undefined,    // initialized with default _id from MongoDB 
      player1: undefined,   // user who creates a game
      player2: undefined,    // user who joins the game
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR' // default fen notation
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    }
  }

  // Display options for creating a game
  showCreate = _ => {
<<<<<<< HEAD
    this.setState({loading: false, creating: true,  joining: false})
  }

  // Create a game with a unique gameId (player1's userId)
=======
    this.setState({ creating: true,  joining: false })
  }

  // Create a game with a unique gameId
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
  createGame() {

    const { socket, user } = this.state;

<<<<<<< HEAD
    this.setState({
      loading: true
    });

    socket.emit('create_game', {
      userId: user._id,
      username: user.username
=======
    socket.emit('create_game', {
      userId: user._id,
      username: user.username,
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    });
  }

  // Display options for joining a game
  showJoin = _ => {
<<<<<<< HEAD
    this.setState({loading: false, creating: false,  joining: true})
  }

  // Join a game with a unique gameId (player1's userId)
=======
    this.setState({ creating: false,  joining: true })
  }

  // Join a game with a unique gameId
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
  joinGame(gameId) {

    const { socket, user } = this.state;

<<<<<<< HEAD
    this.setState({
      loading: true
    });

=======
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    socket.emit('join_game', {
      userId: user._id,
      username: user.username,
      gameId: gameId
    });
<<<<<<< HEAD
  }

  // Start a game with a unique gameId (player1's userId)
  startGame = (gameInfo) => {

    this.setState({
      status: true,
      gameId: gameInfo.gameId,
      player1: gameInfo.createdBy,
      player2: gameInfo.joinedBy
=======

  }

  // Start a game with a unique gameId
  startGame = gameInfo => {

    this.setState({
      start: true,
      player1: gameInfo.createdBy,
      player2: gameInfo.joinedBy,
      gameId: gameInfo.gameId
    });
  }

  // Spectate a game with a unique gameId
  spectateGame = gameInfo => {

    this.setState({
      spectate: true,
      player1: gameInfo.createdBy,
      player2: gameInfo.joinedBy,
      gameId: gameInfo.gameId,
      fen: gameInfo.fen
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    });
  }

  // Establishes socket connection when the page loads up
  componentDidMount() {
<<<<<<< HEAD
=======

>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    const socket = io(API_URL.slice(0, API_URL.indexOf('api/')), {transports: ['websocket']});

    socket.on('connect', _ => {
      this.setState({
        socket
      }, _ => {
        const { socket } = this.state;
        socket.on('start_game', gameInfo => {
          this.startGame(gameInfo);
        });

<<<<<<< HEAD
=======
        socket.on('spectate_game', gameInfo => {
          this.spectateGame(gameInfo);
        });

        socket.on('new_game', gameId => {
          this.setState({
            gameId: gameId
          });
        });

        const url = window.location.href;
        if (url.indexOf('/game') !== -1) {
          const gameId = url.slice(url.indexOf('/game/') + 6);
          console.log(gameId);
          if (gameId) {
            this.joinGame(gameId);
          }
        }
        
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
      });
    });
  }

<<<<<<< HEAD
  // Disconnects socket on page exit (or refresh)
  componentWillUnmount() {
    if( this.state.socket ) {
      this.state.socket.disconnect();
    }
  }

  render() {
    return (
      <div>
        { this.state.status
            ? <Game // renders gameboard
                gameId = { this.state.gameId }
                socket = { this.state.socket }
                self = { this.state.user }
                opponent = { this.state.player1.username !== this.state.user.username ? this.state.player1 : this.state.player2 }
                timerDetails={ this.state.timerDetails }
              />
            : <div> 
                <Card className = 'text-center lobby-card' bg = 'dark' text = 'light'>
                  <Card.Title> Welcome to the Lobby </Card.Title>
                  { !(this.state.loading || this.state.creating || this.state.joining) 
                    // renders default view of the lobby
                      ? <div>
                          <Button
                            variant = 'pbchess'
                            name = 'create'
                            onClick = { _ => this.showCreate()  }
                          >
                            Create
                          </Button>{ ' ' }
                          <Button
                            variant = 'pbchess'
                            name = 'join'
                            onClick = { _ => this.showJoin() }
                          >
                            Join
                          </Button>
                        </div>
                      : ''
                  }
                  { this.state.loading // renders loader
                      ? <div>
                          <Spinner animation = 'border' role = 'status'>
                            <span className = 'sr-only'>Loading...</span>
                          </Spinner>
                        </div>
                      : ''
                  }
                  { this.state.creating
                    ? <CreateGame // renders option for creating a game
                        socketId = { this.state.socket.id } 
                        loading = { this.state.loading }
                        showJoin = { _ => this.showJoin() } 
                        createGame = { _ => this.createGame() }
                      />
                    : ''
                  }
                  { this.state.joining
                      ? <JoinGame // renders option for joining a game
                          socket = { this.state.socket }
                          showCreate = { _ => this.showCreate() }
                          joinGame = { e => this.joinGame(e) }
                        />
                      : ''
                  }
                </Card>
=======
  render() {

    return (
      <div>
        { this.state.start
            ? <PlayGame // renders gameboard
                gameId = { this.state.gameId }
                socket = { this.state.socket }
                player1 = { this.state.player1.username === this.state.user.username ? this.state.player1 : this.state.player2 }
                player2 = { this.state.player1.username === this.state.user.username ? this.state.player2 : this.state.player1 }
                orientation = { this.state.player1.username === this.state.user.username ? 'white' : 'black'} 
                movable = { true }
                timerDetails = { this.state.timerDetails }
              />
            : this.state.spectate 
                ? <SpectateGame // renders gameboard
                    gameId = { this.state.gameId }
                    socket = { this.state.socket }
                    player1 = { this.state.player1 }
                    player2 = { this.state.player2 }
                    orientation = { 'white'} 
                    movable = { false }
                    timerDetails = { this.state.timerDetails }
                    fen = { this.state.fen }
                  />
                : <div> 
                  <Card className = 'text-center lobby-card' bg = 'dark' text = 'light'>
                    <Card.Title> Welcome to the Lobby </Card.Title>
                    { !(this.state.creating || this.state.joining) 
                      // renders default view of the lobby
                        ? <div>
                            <Button
                              variant = 'pbchess'
                              name = 'create'
                              onClick = { _ => this.showCreate()  }
                            >
                              Create
                            </Button>{ ' ' }
                            <Button
                              variant = 'pbchess'
                              name = 'join'
                              onClick = { _ => this.showJoin() }
                            >
                              Join
                            </Button>
                          </div>
                        : ''
                    }
                    { this.state.creating
                      ? <CreateGame // renders option for creating a game
                          gameId = { this.state.gameId } 
                          socket = { this.state.socket }
                          showJoin = { _ => this.showJoin() } 
                          createGame = { _ => this.createGame() }
                        />
                      : ''
                    }
                    { this.state.joining
                        ? <JoinGame // renders option for joining a game
                            socket = { this.state.socket }
                            showCreate = { _ => this.showCreate() }
                            joinGame = { e => this.joinGame(e) }
                          />
                        : ''
                    }
                    
                  </Card>
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
              </div>
        }
      </div>
    )
  }
}

<<<<<<< HEAD
export default Lobby;
=======
export default Lobby;
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
