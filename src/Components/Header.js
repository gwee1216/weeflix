import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;

  z-index: 15;
  background-color: rgba(25, 25, 25, 0.7);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
