import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
=======
import Spinner from 'react-bootstrap/Spinner';
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
import Modal from 'react-bootstrap/Modal';

class JoinGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      roomId: '',
      joiningError: false
=======
      gameId: '',
      joiningError: false,
      loading: false
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
    }
  }


  handleClose() {
<<<<<<< HEAD
    window.location.reload();
=======
    this.setState({
      joiningError: false,
      loading: false
    });
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
  }

  componentDidMount() {
    this.props.socket.on('cannot_join_game', msg => {

      this.setState({
        joiningError: msg
      })
    });
  }

  render() {
    return (
      <div>
        <Card bg = 'dark' text = 'white' border = 'dark'>
        { /* TODO: Options for type of game, timer needs to be implemented */ }

          <Row className = "mt-2">
            <Col>
              <Form.Control
                placeholder = 'Enter game ID ...'
<<<<<<< HEAD
                onChange = { e => this.setState({ roomId: e.target.value }) }
=======
                onChange = { e => this.setState({ gameId: e.target.value }) }
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
              />
            </Col>
            <Col>
              <Button
                variant = 'pbchess'
                type = 'submit'
<<<<<<< HEAD
                onClick = { _ => this.props.joinGame(this.state.roomId) }
=======
                onClick = { _ => 
                  {
                    this.props.joinGame(this.state.gameId);
                    this.setState({
                      loading: true
                    });
                  }
                }
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
              >
                Join
              </Button>
            </Col>
          </Row>
<<<<<<< HEAD
=======
          { this.state.loading // renders loader
              ? <div>
                  <Spinner animation = 'border' role = 'status'>
                    <span className = 'sr-only'>Loading...</span>
                  </Spinner>
                </div>
              : ''
          }
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
          <Button 
            variant = 'link'
            className = 'ml-auto mt-3 d-block'
            onClick = { _ => this.props.showCreate() } 
          >
            Create a game instead?
          </Button>
        </Card>
        <Modal show = { Boolean(this.state.joiningError) } onHide = { _ => this.handleClose() } >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div style = {{ textAlign: 'center', cursor: 'pointer' }}>
              <span role = 'presentation'>
                <p> { this.state.joiningError } </p>
              </span>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

<<<<<<< HEAD
export default JoinGame;
=======
export default JoinGame;
>>>>>>> a4260bcb2f4ff1279d1169ce527e473e3255dedb
