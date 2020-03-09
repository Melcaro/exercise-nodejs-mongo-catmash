import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScoresTitle = styled.div`
  flex: 0 0 10%;
  text-align: center;
  font-size: 2.5em;
`;

export const HomePageLink = styled(Link)`
  flex: 0 0 5%;
  text-decoration: none;
  color: blue;
  text-align: center;
  margin-top: 1%;
  font-size: 1.5em;
`;

export const ScoresTable = styled.table`
  border: 2px solid brown;
  margin-top: 2%;
`;

export const TheadTable = styled.thead`
  border: 1px solid blue;
`;

export const TitlesContainer = styled.tr`
  display: flex;
  align-items: center;
`;

export const CatTitle = styled.th`
  flex: 0 0 36%;
  font-size: 1.5em;
`;
export const TableTitles = styled.th`
  flex: 0 0 32%;
  font-size: 1.5em;
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

export const BodyRow = styled.tr`
  flex: 0 0 10%;
  border: 1px solid brown;
  display: flex;
  width: 100%;
`;

export const TDImg = styled.td`
  flex: O O 36%;
  min-width: 36%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ScoresTD = styled.td`
  flex: 0 0 32%;
  font-size: 2em;
  text-align: center;
  margin: auto;
`;
