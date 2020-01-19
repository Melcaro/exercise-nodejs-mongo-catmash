import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchCatsList, sendMatchResults } from '../services/CatsServices';

export class HomePage extends Component {
  state = {
    catsList: [],
    firstCat: '',
    secondCat: '',
  };

  componentDidMount() {
    this.getCatsList();
  }

  getCatsList = async () => {
    const { data: catsList } = await fetchCatsList();
    this.setState(
      {
        catsList,
      },
      this.getRandomCats
    );
  };

  getRandomCats = () => {
    const { catsList } = this.state;
    this.setState({
      firstCat: catsList[Math.floor(Math.random() * catsList.length - 1)],
      secondCat: catsList[Math.floor(Math.random() * catsList.length - 1)],
    });
  };

  attributeResults = (winnerCatID, loserCatID) => {
    sendMatchResults(winnerCatID, loserCatID);
    this.getRandomCats();
  };

  render() {
    const {
      firstCat: { _id: firstCatID, image: firstCatImage },
      secondCat: { _id: secondCatID, image: secondCatImage },
    } = this.state;
    return (
      <div>
        <div
          style={{
            height: '80vh',
            width: '90vw',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{ flex: '0 0 45%' }}
            onClick={this.attributeResults.bind(null, firstCatID, secondCatID)}
          >
            <img
              src={firstCatImage}
              alt="1st cat pic"
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{ flex: '0 0 45%' }}
            onClick={this.attributeResults.bind(null, secondCatID, firstCatID)}
          >
            <img
              src={secondCatImage}
              alt="2nd cat pic"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <Link to="/scores">
          <div>Scores</div>
        </Link>
      </div>
    );
  }
}
