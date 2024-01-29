import * as React from "react";
import styled from "styled-components";
import { TodoCard } from "./TodoCard";

export const MainArea = ({
  todoCardList,
  setTodoCardList,
}) => {

  const deleteCard = (todoCard) => {
    const deleteCardId = todoCard.id
    const deletedCardList = todoCardList.filter(card => card.id !== deleteCardId)
    setTodoCardList(deletedCardList)
  }

  return(
    <MainAreaWrap>
      <TodoCardList>
        {todoCardList && 
          todoCardList.map(todoCard => (
            <TodoCard
              todoCard={todoCard}
              onDeleteCard={() => deleteCard(todoCard)}
            />
          ))
        }
      </TodoCardList>
    </MainAreaWrap>
  )
}

const MainAreaWrap = styled.div`
  overflow-y: scroll;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`

const TodoCardList = styled.div`
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
