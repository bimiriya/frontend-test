import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, Modal } from 'react-bootstrap';

class NewContact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      newUrl: '',
      newName: '',
      newDesc: ''
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.createNewContact = this.createNewContact.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleOnChange() {
    this.setState({
      
    })
  }

  createNewContact() {
    const formData = new FormData();
    formData.append('name', profile.lastName);
    formData.append('description', profile.email);
    formData.append('photo', profile.firstName);
    return fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: formData
    })
}

  render() {
    return (
      <div>
        <Button bsStyle="warning" onClick={this.handleShow} >
        <FontAwesome name='plus-circle' />
          Nuevo Contacto
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <label htmlFor="">URL imagen de perfil</label>
         <input type="text"/>
         <label htmlFor="">Nombre</label>
         <input type="text"/>
         <label htmlFor="">Descripción</label>
         <textarea name="" id="" cols="30" rows="10"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
          <Button onClick={this.createNewContact} >Guardar</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default NewContact;