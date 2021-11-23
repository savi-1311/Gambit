import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';
<<<<<<< HEAD
=======
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb

import clipboard from '../../images/clipboard.svg';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      copied: false
=======
      copied: false,
      creatingError: false,
      loading: false
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    }
  }

  copyToClipBoard() {
<<<<<<< HEAD
    navigator.clipboard.writeText(this.props.socketId);
    this.setState({
      copied: true
    })
  }

  render() {
    return (
      this.props.loading
        ? <Card bg = 'dark' text = 'white' border = 'dark'>
            <Card.Header>Share your Game ID for other players to join ...</Card.Header>
            <Card.Body>
              <blockquote>
                <OverlayTrigger
                  placement = 'bottom'
                  overlay = {
                    <Tooltip id = 'button-tooltip-2'>
                      { this.state.copied
                          ? 'Copied!'
                          : 'Click to Copy'
                      }
                    </Tooltip>
                  }
                >
                  {({ ref, ...triggerHandler }) => (
                    <Button
                      variant = 'secondary'
                      {...triggerHandler}
                      className = 'd-inline-flex align-items-center'
                      onClick = { _ => this.copyToClipBoard() }
                    >
                      <span className = 'ml-1'>{ this.props.socketId }</span>
    
                      <Image
                        ref = { ref }
                        thumbnail
                        src = { clipboard }
                        margin
                      />
                    </Button>
                  )}
                </OverlayTrigger>
              </blockquote>
            </Card.Body>
            <Button 
                variant = 'link'
                className = 'ml-auto py-0'
                onClick = { _ => this.props.showJoin() }
            >
              Join instead?
            </Button>
          </Card>
        : <Card bg = 'dark' text = 'white' border = 'dark'>
            { /* TODO: Options for type of game, timer needs to be implemented */ }
            <div>
              <Button 
                variant = 'pbchess'
                onClick = { _ => this.props.createGame() }
              >
                Create
              </Button>
            </div>
          </Card>
    
=======
    navigator.clipboard.writeText(this.props.gameId);
    this.setState({
      copied: true,
      creatingError: false
    })
  }

  handleClose() {
    window.location.reload();
  }

  componentDidMount() {
    this.props.socket.on('cannot_create_game', msg => {

      this.setState({
        creatingError: msg
      })
    });
  }

  render() {
    return (
      <div>
        { this.state.loading
          ? <Card bg = 'dark' text = 'white' border = 'dark'>
              <Card.Header>Share your Game ID for other players to join ...</Card.Header>
              { this.props.gameId 
                  ? <Card.Body>
                      <blockquote>
                        <OverlayTrigger
                          placement = 'bottom'
                          overlay = {
                            <Tooltip id = 'button-tooltip-2'>
                              { this.state.copied
                                  ? 'Copied!'
                                  : 'Click to Copy'
                              }
                            </Tooltip>
                          }
                        >
                          {({ ref, ...triggerHandler }) => (
                            <Button
                              variant = 'secondary'
                              {...triggerHandler}
                              className = 'd-inline-flex align-items-center'
                              onClick = { _ => this.copyToClipBoard() }
                            >
                              <span className = 'ml-1'>
                                { this.props.gameId }
                              </span>
            
                              <Image
                                ref = { ref }
                                thumbnail
                                src = { clipboard }
                                margin
                              />
                            </Button>
                          )}
                        </OverlayTrigger>
                      </blockquote>
                    </Card.Body>
                  : <Card.Body>
                      'Initializing the Game ID...' 
                    </Card.Body>

                    
              }

              <div>
                <Spinner animation = 'border' role = 'status'>
                  <span className = 'sr-only'>Loading...</span>
                </Spinner>
              </div>
              
              <Button 
                  variant = 'link'
                  className = 'ml-auto py-0'
                  onClick = { _ => this.props.showJoin() }
              >
                Join instead?
              </Button>
            </Card>
          : <Card bg = 'dark' text = 'white' border = 'dark'>
              { /* TODO: Options for type of game, timer needs to be implemented */ }
              <div>
                <Button 
                  variant = 'pbchess'
                  onClick = { _ => {
                    this.props.createGame();
                    this.setState({
                      loading: true
                    })
                   }
                  }
                >
                  Create
                </Button>
              </div>

            </Card>
        }
        <Modal show = { Boolean(this.state.creatingError) } onHide = { _ => this.handleClose() } >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div style = {{ textAlign: 'center', cursor: 'pointer' }}>
              <span role = 'presentation'>
                <p> { this.state.creatingError } </p>
              </span>
            </div>
          </Modal.Body>
        </Modal>
        
      </div>
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    );
  }
}

<<<<<<< HEAD
export default CreateGame;
=======
export default CreateGame;
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
