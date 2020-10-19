import React from "react";
import ReactDOM from "react-dom";
// import Test from "./test";
import SearchMovies from "./SearchMovies"


//Api key: 00cc8076e871d622a8ff2452eaa31fdb

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Hello world updated!</h1>
        <SearchMovies/>
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));
