import React from "react";
import Button from "../button/Button";
import "./search.scss";
import Items from "../listItems/Items";
import ItemTiles from "../tiles/ItemTiles";


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

interface ItemsProps {
  people: PeopleItems[];
  planets: PlanetsItems[];
  errorMessage: string;
  handleClick: () => void;
}


interface SearchState {
  searchTerm: string,
  isSearchedItem?: boolean
}

class Search extends React.Component<ItemsProps, SearchState> {
  constructor(props: ItemsProps) {
    super(props);

    const prevSearchedItem = localStorage.getItem('searchTerm') || '';
    
    this.state = ({
      searchTerm: prevSearchedItem,
      isSearchedItem: false
    })

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }
  

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value })
  }

  handleFormSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const { searchTerm } = this.state;
    localStorage.setItem('searchTerm', searchTerm);
    this.setState({ isSearchedItem: true })
  }

  



  render() {
    const { people, planets, errorMessage } = this.props;
    const { searchTerm, isSearchedItem } = this.state;

    const filteredPeople = people.filter((person) => 
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const filteredPlanets = planets.filter((planet) => 
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <>
        <section className="search-sw">
        <form className="search-sw__form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            name="search-sw"
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <Button buttonType={"submit"}>Search</Button>
        </form>
      </section>
      <section>
          {isSearchedItem === true ? (
            <>
              {filteredPeople.length > 0 &&
                filteredPeople.map((person) => (
                  <ItemTiles item={person} handleClick={() => {}} key={person.name} />
                ))}
              {filteredPlanets.length > 0 &&
                filteredPlanets.map((planet) => (
                  <ItemTiles item={planet} handleClick={() => {}} key={planet.name} />
                ))}
              {filteredPeople.length === 0 && filteredPlanets.length === 0 && (
                <div>No results found.</div>
              )}
            </>
          ) : (
            <Items
              people={people}
              planets={planets}
              errorMessage={errorMessage}
              handleClick={() => {}}
            />
          )}
        </section>
      </>
    );
  }
}
export default Search;
