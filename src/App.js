import React, { Component } from "react";
import Media from "react-media";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={
              "https://killcloud.nyc3.digitaloceanspaces.com/assets/logo.svg"
            }
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Responsive demo using react-media</h1>
        </header>
        <p className="App-sub">
          Resize the browser to see react-media in action
        </p>
        <div>
          <Media
            query="(min-width: 800px)"
            render={() => (
              <p className="App-intro">
                The document is at least 800px wide. <br /> <br /> This is
                rendered using render props
              </p>
            )}
          />
          <Media query="(min-width: 600px) and (max-width: 799px)">
            {matches =>
              matches ? (
                <p className="App-intro">
                  The document is between 600px and 799px wide.
                  <br /> <br /> This is rendered using children props
                </p>
              ) : null
            }
          </Media>
          <Media query="(max-width: 599px)" render={() => <Mobile />} />
        </div>
      </div>
    );
  }
}

const Mobile = () => (
  <p className="App-intro">
    The document is less than 600px wide.
    <br /> <br /> This is rendered passing a component via render props
  </p>
);

export default App;
