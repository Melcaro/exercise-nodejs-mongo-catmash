import React, { Component } from 'react';

import { Header } from './Header';

import { fetchCatsList } from '../services/CatsServices';

export class HomePage extends Component {
  state = {
    catsList: [],
    firstCat: '',
    secondCat: '',
  };

  componentDidMount() {
    this.getCatsList();
  }

  getCatsList = () => {
    const catsList = fetchCatsList();
    console.log(catsList);
    this.setState({
      catsList,
      firstCat: catsList[Math.floor(Math.random() * catsList.length)],
      secondCat: catsList[Math.floor(Math.random() * catsList.length)],
    });
  };

  render() {
    const {
      firstCat: {
        id: firstCatID,
        image: firstCatImage,
        wonMatches: firstCatWonMatches,
        lostMatches: firstCatLostMatches,
      },
      secondCat: {
        id: secondCattID,
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
          <div style={{ flex: '0 0 45%' }}>
            <img
              src={firstCatImage}
              alt="1st cat pic"
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ flex: '0 0 45%' }}>
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
