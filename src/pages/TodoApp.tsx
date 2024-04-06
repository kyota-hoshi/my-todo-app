import * as React from "react";
import { useCards } from "../hooks/useCards";
import { Header } from "../components/Header";
import { TodoMainArea } from "../components/TodoMainArea";
import { AddDialog } from "../components/AddDialog";
import { PageStyle } from "../styles/shared/pageStyle";
import { Link } from "react-router-dom";
import {
  AddButtonStyle as AddButton,
} from "../styles/pages/todoAppStyle"

const { useState } = React

export const TodoApp = () => {
  const {
    addCard, 
  } = useCards();

  const [clickAdd, setClickAdd] = useState(false)
  const [addCardText, setAddCardText] = useState('')

  const handleConfirmClick = () => {
    addCard(addCardText);
    setClickAdd(false);
  }

  const HeaderNavigate = () => {
    return (
      <>
        <Link to='gabagebox'>ゴミ箱へ</Link>
        <AddButton onClick={() => setClickAdd(!clickAdd)}>+</AddButton>
      </>
    )
  }

  return (
    <PageStyle>
      <Header
        title="My TODO"
        navigate={<HeaderNavigate />}
      />
      <TodoMainArea />
      {clickAdd && (
        <AddDialog
          addCardText={addCardText}
          setAddCardText={setAddCardText}
          onCancelClick={() => setClickAdd(false)}
          onConfirmClick={handleConfirmClick}
        />
      )}
    </PageStyle>
  )
}
