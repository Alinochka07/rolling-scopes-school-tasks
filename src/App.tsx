import React from "react";
import "./App.scss";
import Search from "./components/search/Search";
import Items from "./components/listItems/Items";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app-container">
        <Search />
        <Items people={[]} planets={[]} handleClick={() => {}} />
      </div>
    );
  }
}

export default App;
