import React from "react";

import "./LeaderBoard.css";
import EntriesApi from "../../apis/entries";

class LeaderBoard extends React.Component {
  state = { results: [] };

  componentDidMount() {
    this.fromDB();
  }

  async fromDB() {
    let results = await EntriesApi.getEntries();
    this.setState({results:results});
  }

  render() {
    console.log(this.state);

    let rank = 1;
    let content = this.state.results.map(
      value => 
      
        <tr className="row">
          <td className="cell">{rank++}.</td>
          <td className="cell">{value.name}</td>
          <td className="cell">{value.score}</td>
        </tr>
    );

    return (
      <div className="LBWrapper">
        <h3 id="header"> Leaderboard </h3>
        
        <table className="board">
          
          <thead>
            <tr class="header">
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

            <tbody>
              {content}
            </tbody>  

        </table>
      </div>
    );
  }
}
export default LeaderBoard;