import * as React from "react";
import styled from "styled-components";

export const Header = ({
  onAddClick,
}) => {
  return (
    <HeaderWrap>
      <Title>My TODO</Title>
      <AddButton onClick={onAddClick}>+</AddButton>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  height: 100%;
  margin: 0 15px;
  font-size: 35px;
  font-weight: bold;
`

const AddButton = styled.button`
  height: 100%;
  font-size: 40px;
  margin: 0 15px;
  color: gray;
  line-height: 100%;
  cursor: pointer;

  &:hover {
    color: black;
  }
`
