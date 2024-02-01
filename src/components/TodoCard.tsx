import * as React from "react";
import styled from "styled-components";

export const TodoCard = ({
  todoCard,
  onDeleteCard,
  onClickDoneCheck,
}) => {
  return (
    <TodoCardWrap>
      <DoneCheck
        style={{
          opacity: todoCard.doneFlag ? 1 : 0.3,
          color: todoCard.doneFlag ? 'green': 'black',
        }}
        onClick={onClickDoneCheck}>️✔︎</DoneCheck>
      <CardTitle>{todoCard.text}</CardTitle>
      <DeleteButton onClick={onDeleteCard}>×</DeleteButton>
    </TodoCardWrap>
  )
}

const TodoCardWrap = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DoneCheck = styled.button`
  font-size: 15px;
  cursor: pointer;
`

const CardTitle = styled.div`
  width: 100%;
  margin-left: 10px;
`

const DeleteButton = styled.button`
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