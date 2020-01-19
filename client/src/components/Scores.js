import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchScores } from '../services/CatsServices';

export class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catsList: [],
    };
  }
  componentDidMount() {
    this.getScores();
  }

  getScores = async () => {
    const { data: catsList } = await fetchScores();
    this.setState({ catsList });
  };
  render() {
    const { catsList } = this.state;
    console.log(this.props);
    return (
      <div>
        <h1>SCORES</h1>
        <Link to="/">
          <p>Go back to Home Page</p>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Cat</th>
              <th>Matches won</th>
              <th>Matches lost</th>
            </tr>
          </thead>
          <tbody>
            {catsList.map(({ _id: catID, image, wonMatches, lostMatches }) => (
              <tr key={catID}>
                <td>
                  <div>
                    <img src={image} alt="cat pic" />
                  </div>
                </td>
                <td>{wonMatches}</td>
                <td>{lostMatches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
