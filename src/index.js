import React from "react";
import { render } from "react-dom";
import Media from "react-media";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div>
    <Media
      query="(min-width: 800px)"
      render={() => <p>The document is at least 800px wide.</p>}
    />
    <Media
      query="(min-width: 600px) and (max-width: 799px)"
      render={() => <p>The document between 600px and 799px wide.</p>}
    />
    <Media
      query="(max-width: 599px)"
      render={() => <p>The document is less than 600px wide.</p>}
    />
  </div>
);

render(<App />, document.getElementById("root"));
