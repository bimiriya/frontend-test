import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import NewContact from './components/NewContact';
import ContactBox from './components/ContactBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: '',
      id: '',
      name: ''
    };
  }

  componentWillMount() {
    this.getContacts()
  }
  
  getContacts() {
    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data =>
      data.map(contact => ({
        id: contact.id,
        name: contact.name,
        description: contact.description,
        pic: contact.photo
      }))
    )
    .then(contacts =>
      this.setState({
        contacts
      })
    )
    .catch(error => console.log(error));
  }

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
          <Col xs={12} sm={12} md={12} lg={12}>
            <ContactBox contacts={this.state.contacts} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;