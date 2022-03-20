import React, { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      inputVal: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) =>
    this.setState(() => {
      return { inputVal: event.target.value.toLowerCase() };
    });
  render() {
    const { monsters, inputVal } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(inputVal);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder={"Search Monster"}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
