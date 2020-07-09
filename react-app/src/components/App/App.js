import React from "react";
import "./App.css";
import LB from '../LeaderBoard/LeaderBoard';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <LB />
      </div>
    );
  }
}

export default App;