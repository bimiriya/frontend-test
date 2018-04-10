import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';

class ContactBox extends Component {
  
  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <Table striped bordered condensed hover responsive id="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
              {this.props.contacts ? (
                this.props.contacts.map(contact => (
            <tbody>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <td key={contact.id}>
                    <tr>
                      <img src={contact.pic} />{contact.name}
                    </tr>
                  </td>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <td key={contact.id}>
                    <tr>{contact.description}</tr>
                  </td>
                </Col>
              </Row>
              </tbody>
                ))
              ) : null}
        </Table>
      </div>
    );
  }
}

export default ContactBox;
