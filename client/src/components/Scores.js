import React, { Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';

import { fetchScores } from '../services/CatsServices';

import {
  ScoresContainer,
  ScoresTitle,
  HomePageLink,
  ScoresTable,
  TheadTable,
  TitlesContainer,
  CatTitle,
  TableTitles,
  Tbody,
  BodyRow,
  TDImg,
  Img,
  ScoresTD,
} from '../styles/ScoresStyle';

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
    return (
      <ScoresContainer>
        <ScrollUpButton />
        <ScoresTitle>SCORES</ScoresTitle>
        <HomePageLink to="/">Go back to Home Page</HomePageLink>
        <ScoresTable>
          <TheadTable>
            <TitlesContainer>
              <CatTitle>Cat</CatTitle>
              <TableTitles>Matches won</TableTitles>
              <TableTitles>Matches lost</TableTitles>
            </TitlesContainer>
          </TheadTable>
          <Tbody>
            {catsList.map(({ _id: catID, image, wonMatches, lostMatches }) => (
              <BodyRow key={catID}>
                <TDImg>
                  <Img src={image} alt="cat pic" />
                </TDImg>
                <ScoresTD>{wonMatches}</ScoresTD>
                <ScoresTD>{lostMatches}</ScoresTD>
              </BodyRow>
            ))}
          </Tbody>
        </ScoresTable>
      </ScoresContainer>
    );
  }
}
