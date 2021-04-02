import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = {
    term: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term
      }
    });
    console.log(response.data.results);
    this.setState({
      term: response.data.results
    });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "1vh",
          width: "50%"
        }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.term} />
      </div>
    );
  }
}

export default App;
