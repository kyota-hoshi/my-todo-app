import styled from 'styled-components'

export const TodoCardWrap = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TodoCardOparation = styled.button`
  font-size: 15px;
  cursor: pointer;
`

export const CardTitle = styled.div`
  width: 100%;
  margin-left: 10px;
`

export const DeleteButton = styled.button`
  height: 100%;
  font-size: 40px;
  line-height: 100%;
  margin: 0 10px;
  color: red;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`