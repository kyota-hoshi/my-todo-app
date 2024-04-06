import { styled } from 'styled-components'

export const MainAreaWrap = styled.div`
  overflow-y: scroll;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`

export const TodoCardList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: left;
  align-items: center;

  > :not(:first-child) {
    margin-top: 10px;
  }
`
