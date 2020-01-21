import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    return <div>{this.props.color}</div>;
  }
}

ReactDom.render(<App color="red" />, document.querySelector("#root"));

interface AppProps {
  color: string;
}

class App extends React.Component {
  render() {
    return <div>{this.props.color}</div>;
  }
}

class App extends React.Component<AddProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

interface AppProps {
  color?: string;
}
