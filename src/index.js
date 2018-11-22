import React from "react";
import ReactDOM from "react-dom";
import qs from "query-string";
import url from "url";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }

  onChange = e => {
    this.setState({ url: e.target.value });
  };

  formatString = () => {
    const result = url.parse(this.state.url);
    const queryString = result.query || this.state.url;
    result.prettyQuery = qs.parse(queryString);
    return result;
  };

  render() {
    return (
      <div className="App">
        <input
          width={200}
          type="text"
          onChange={this.onChange}
          value={this.state.url}
        />
        <pre className="results">
          {JSON.stringify(this.formatString(), 0, 2)}
        </pre>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
