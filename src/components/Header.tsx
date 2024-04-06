import * as React from "react";
import styled from "styled-components";
import { NavigateStyle } from "../styles/shared/navigateStyle";

interface Props {
  title: string
  navigate: React.ReactNode
}

export const Header: React.FC<Props> = ({ title, navigate }) => {
  return (
    <HeaderWrap>
      <Title>{title}</Title>
      <NavigateStyle>
        {navigate}
      </NavigateStyle>
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
