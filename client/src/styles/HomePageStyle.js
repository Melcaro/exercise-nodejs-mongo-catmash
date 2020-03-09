import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
  flex: 0 0 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

export const CatsContainer = styled.div`
  flex: 0 0 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.div`
  flex: 0 0 40%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ScoresLink = styled(Link)`
  flex: 0 0 30%;
  font-size: 2.5em;
  margin-top: 3%;
  text-decoration: none;
  color: black;
`;
