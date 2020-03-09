import React, { Component } from 'react';

import {
  HomePageContainer,
  ImgContainer,
  CatsContainer,
  Img,
  ScoresLink,
} from '../styles/HomePageStyle';

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
      <HomePageContainer>
        <CatsContainer>
          <ImgContainer
            onClick={this.attributeResults.bind(null, firstCatID, secondCatID)}
          >
            <Img src={firstCatImage} alt="1st cat pic" />
          </ImgContainer>
          <ImgContainer
            onClick={this.attributeResults.bind(null, secondCatID, firstCatID)}
          >
            <Img src={secondCatImage} alt="2nd cat pic" />
          </ImgContainer>
        </CatsContainer>
        <ScoresLink to="/scores">See scores</ScoresLink>
      </HomePageContainer>
    );
  }
}
