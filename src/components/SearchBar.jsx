import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return (
      <div >
          <FormGroup>
            <FormControl type="text" placeholder="Buscar contacto..." />
          </FormGroup>{' '}
      </div>
    );
  }
}

export default SearchBar;