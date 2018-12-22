import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ModeList from './components/ModeList';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={3}>
            <ModeList />
          </Col>
          <Col xs={14} md={9}>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
