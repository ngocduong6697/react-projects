import React from "react";
import Products from "./components/Products";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Products App</h1>
        </header>
        <section>
          <Products></Products>
        </section>
      </div>
    );
  }
}

export default App;
