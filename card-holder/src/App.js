import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      didSubmit: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    this.setState({
      didSubmit: true
    });
  }
  onChange(event) {
    this.setState({
      searchQuery: event.target.value,
      didSubmit: false
    });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <SearchBar
          onChange={this.onChange}
          onClick={this.onSubmit}
          value={searchQuery}
        />
        {this.state.didSubmit && <Card username={searchQuery} />}
      </div>
    );
  }
}

export default App;