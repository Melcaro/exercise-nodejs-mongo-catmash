import React, { Component } from 'react';

import { Header } from './Header';

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
  };

  render() {
    const {
      firstCat: {
        _id: firstCatID,
        image: firstCatImage,
        wonMatches: firstCatWonMatches,
        lostMatches: firstCatLostMatches,
      },
      secondCat: {
        _id: secondCatID,
        image: secondCatImage,
        wonMatches: secondCattWonMatches,
        lostMatches: secondCattLostMatches,
      },
    } = this.state;
    return (
      <div>
        <Header />
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
        <div>Scores</div>
      </div>
    );
  }
}
