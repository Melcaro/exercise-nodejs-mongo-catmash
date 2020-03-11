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
    indexCounter: 0,
  };

  componentDidMount() {
    this.getCatsList();
  }

  getCatsList = async () => {
    const { data: catsList } = await fetchCatsList();
    this.setState({
      catsList,
      indexCounter: 0,
    });
  };

  attributeResults = (winnerCatID, loserCatID) => {
    sendMatchResults(winnerCatID, loserCatID);
    this.setState(prevState => ({
      indexCounter: prevState.indexCounter + 2,
    }));
    if (this.state.indexCounter > 5) {
      this.getCatsList();
      this.setState({ indexCounter: 0 });
    }
  };

  render() {
    const { indexCounter, catsList } = this.state;
    const loader = catsList.length === 0 && <div>LOADING</div>;

    if (loader) {
      return loader;
    }

    const { _id: firstCatID, image: firstCatImage } = catsList[indexCounter];
    const { _id: secondCatID, image: secondCatImage } = catsList[
      indexCounter + 1
    ];

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
