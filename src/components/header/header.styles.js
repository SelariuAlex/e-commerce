import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #212121;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 200px;
  padding: 15px;
  margin-left: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #03a9f4;
  font-weight: bold;
  font-size: 18px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-weight: 700;
`;
