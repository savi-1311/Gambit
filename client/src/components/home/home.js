import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Player } from '@lottiefiles/react-lottie-player';

import MagnusCarlsen from '../../images/magnus.jpg';
import Hikaru from '../../images/hikaru.jpg';
import GarryKaspaov from '../../images/garry.png';
import JuditPolgar from '../../images/judit.jpg';
import './home.css';
import homebg from '../../images/homebg.svg';
import chessboard from  '../../images/chessboard.png';
import homeblobs from '../../images/homeblobs.json';

import Footer from "../footer/footer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="page-container">
        <div id="content-wrap">
          <img
            src = { homebg }
            alt = 'Homepage Background Top'
            id = 'homebg'
          />
          <img
            src = { chessboard }
            alt = 'chessboard'
            id = 'chessboard'
          />
          {/* <Player
            autoplay
            loop
            src = { homeblobs }
            style = {{
              height: '50%',
              width: '50%',
              position: 'absolute',
              marginTop: '15%',
              zIndex: -1
            }}
          >
          </Player> */}
          {/* <Player
            autoplay
            loop
            src = { homeblobs }
            style = {{
              height: '10em',
              width: '10em',
              position: 'absolute',
              marginTop: '550px',
              marginLeft: '55%',
              zIndex: -1
            }}
          > */}
          {/* </Player> */}
          <div className = 'p-3 mb-2 text-white title'>
            <h1> Gambit </h1>
            <h3> A free online chess platform </h3>
          </div>
          <Carousel  className = 'text-center' style={{marginTop:'2%'}}>
            <Carousel.Item >
              <Card bsPrefix = 'mycard' >
                <Card.Img variant = 'top' src = { MagnusCarlsen } alt = 'Magnus Carlsen' style = {{ width: '300px', margin: 'auto' }} className = 'rounded-circle' />
                <Card.Body>
                  <Card.Title>
                    Magnus Carlsen
                  </Card.Title>
                  <Card.Text>
                    <q>Some people think that if their opponent plays a beautiful game, it???s OK to lose. I don???t. You have to be merciless.</q>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item >
              <Card bsPrefix = 'mycard' >
                <Card.Img variant = 'top' src = { JuditPolgar } alt = 'Judit Polgar' style = {{ width: '350px',height:'300px', margin: 'auto' }} className = 'rounded-circle' />
                <Card.Body>
                  <Card.Title>
                    Judit Polgar
                  </Card.Title>
                  <Card.Text>
                    <q>One can say that in the last decades chess has become more of a sport than of a science. I see it from an artistic point of view.</q>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item >
              <Card bsPrefix = 'mycard' >
                <Card.Img variant = 'top' src = { GarryKaspaov } alt = 'Garry Kasparov' style = {{width: '350px',height:'300px', margin: 'auto' }} className = 'rounded-circle' />
                <Card.Body>
                  <Card.Title>
                    Garry Kasparov
                  </Card.Title>
                  <Card.Text>
                    <q>To become good at anything you have to know how to apply basic principles. To become great at it, you have to know when to violate those principles.</q>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item >  
              <Card bsPrefix = 'mycard' >
                <Card.Img variant = 'top' src = { Hikaru } alt = 'Hikaru Nakamura' style = {{ width: '350px',height:'300px', margin: 'auto' }} className = 'rounded-circle' />
                <Card.Body>
                  <Card.Title>
                   Hikaru Nakamura
                  </Card.Title>
                  <Card.Text>
                    <q>Critical thinking is the most important factor with chess. As it is in life, you need to think before you make decisions.</q>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
