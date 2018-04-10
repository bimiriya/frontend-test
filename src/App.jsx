import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import NewContact from './components/NewContact';
// import ContactBox from './components/ContactBox';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1>Test Beetrack</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <SearchBar />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} className="text-right">
            <NewContact />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            {/* <ContactBox /> */}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;