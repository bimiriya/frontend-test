import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';

class ContactBox extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <Table striped bordered condensed hover responsive id="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        {this.props.contacts
          ? this.props.contacts.map(contact => (
              <tbody>
                <tr>
                  <td>
                    <img src={contact.pic} />
                    <span>{contact.name}</span>
                  </td>
                  <td>
                    <p>{contact.description}</p>
                  </td>
                </tr>
              </tbody>
            ))
          : null}
      </Table>
    );
  }
}

export default ContactBox;
