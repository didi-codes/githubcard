import React from "react";
import { FormControl, FormGroup, InputGroup, Button } from "react-bootstrap";

const SearchBar = ({ value, onClick, onChange }) => (
  <FormGroup>
    <InputGroup>
      <FormControl
        className='search-input'
        type="text"
        placeholder="Search github username..."
        onChange={onChange}
        value={value}
      />
        <Button color='danger' onClick={onClick}>
          Search
        </Button>
      
    </InputGroup>
  </FormGroup>
);

export default SearchBar;