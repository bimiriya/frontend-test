import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {

  filterContacts(event) {
    const filter = event.target.value.toUpperCase();
    const table = document.getElementById("table");
    const tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
      var td = tr[i].querySelector("td span");
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  render() {
    return (
      <div>
        <FormGroup>
          <FormControl
            onChange={this.filterContacts}
            type="text"
            placeholder="Buscar contacto..."
          />
        </FormGroup>
      </div>
    );
  }
}

export default SearchBar;
