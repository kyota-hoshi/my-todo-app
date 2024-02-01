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

  const toggleDoneCheck = (todoCard) => {
    const toggledCardList = [...todoCardList]
    const toggledCardIndex = todoCardList.indexOf(todoCard)
    toggledCardList[toggledCardIndex].doneFlag = !toggledCardList[toggledCardIndex].doneFlag

    setTodoCardList(toggledCardList)
  }
  return(
    <MainAreaWrap>
      <TodoCardList>
        {todoCardList && 
          todoCardList.map(todoCard => (
            <TodoCard
              key={todoCard.id}
              todoCard={todoCard}
              onDeleteCard={() => deleteCard(todoCard)}
              onClickDoneCheck={() => toggleDoneCheck(todoCard)}
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
