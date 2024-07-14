import React from "react";
import "./App.scss";
import Search from "./components/search/Search";


interface PeopleItems {
  name: string;
  height: number;
  birth_year: string;
  gender: string;
}

interface PlanetsItems {
  name: string;
  population: number;
  climate: string;
}


interface ItemsState {
  people: PeopleItems[];
  planets: PlanetsItems[];
  errorMessage: string;
}

class App extends React.Component<object, ItemsState> {
  constructor(props: object) {
    super(props);

    this.state = {
      people: [],
      planets: [],
      errorMessage: "",
    };
  }

  componentDidMount(): void {
    this.fetchPeople();
    this.fetchPlanets();
  }

  fetchPeople = () => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error occurred during fetching items.");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          people: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  };

  fetchPlanets = () => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error occurred during fetching items.");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          planets: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  };

  render(): React.ReactNode {
    return (
      <div className="app-container">
        <Search people={this.state.people} planets={this.state.planets} errorMessage={this.state.errorMessage} handleClick={() => {} } />
      </div>
    );
  }
}

export default App;
