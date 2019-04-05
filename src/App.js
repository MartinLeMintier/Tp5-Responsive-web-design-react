import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';

import './App.css';
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
  render() {
    return (

      <Container>

        <Row>

        
        
      <div>
        <Header />


        <Col md ="2">
        <SideMenu />

        </Col>

        <Col md = "10">
        <main>
          <Artist />
          <AlbumGrid />
        </main>

        </Col>


      </div>

      </Row>

      </Container>
    );
  }
}

export default App;
