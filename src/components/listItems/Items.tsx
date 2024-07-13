import React from "react";
import "./items.scss";

interface PeopleItems {
  name: string;
  height: number;
  birth_year: string;
  gender: string;
}

interface PlanetsItems {
  name: string;
  population: string;
  climate: string;
}

interface ItemsProps {
  people: PeopleItems[];
  planets: PlanetsItems[];
  handleClick: () => void;
}

interface ItemsState {
  people: PeopleItems[];
  planets: PlanetsItems[];
  errorMessage: string;
}

class Items extends React.Component<ItemsProps, ItemsState> {
  constructor(props: ItemsProps) {
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
    const { people, planets, errorMessage } = this.state;

    return (
      <>
        {people.length && planets.length ? (
          <section className="list-items">
            <div className="items-info">
              <h3 className="items-header">Star war people:</h3>
              <div className="items">
                {people.map((item, index) => (
                  <div key={index} className="item-info">
                    <div className="item-info__name">{item.name}</div>
                    <div className="item-info__details">
                      <p className="item-info__detail">
                        This Star War hero {item.name} has a height of{" "}
                        {item.height} cm.
                        {item.gender === "male" ? (
                          <span> He</span>
                        ) : (
                          <span> She</span>
                        )}{" "}
                        was born in {item.birth_year}.{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="items-info">
              <h3 className="items-header">Star war planets:</h3>
              <div className="items">
                {planets.map((item, index) => (
                  <div key={index} className="item-info">
                    <div className="item-info__name">{item.name}</div>
                    <div className="item-info__details">
                      <p className="item-info__detail">
                        Climate: {item.climate}
                      </p>
                      <p className="item-info__detail">
                        Population: {item.population}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="items-header">
            {errorMessage
              ? `${errorMessage}. Please check your network connection 🛜`
              : "Loading data... "}
          </div>
        )}
      </>
    );
  }
}

export default Items;
