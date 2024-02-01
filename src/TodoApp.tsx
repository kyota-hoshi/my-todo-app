import * as React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { MainArea } from "./components/MainArea";
import { AddDialog } from "./components/AddDialog";
import { randomID } from "../util/util";

const useState = React.useState;

export const TodoApp = () => {
  const [todoCardList, setTodoCardList] = useState([
    {
      id: randomID(),
      text: 'アプリ開発',
      doneFlag: true,
    },
    {
      id: randomID(),
      text: '単体テスト',
      doneFlag: false,
    },
  ])

  const [clickAdd, setClickAdd] = useState(false)
  const [addCardText, setAddCardText] = useState('')

  const addCard = (addCardText) => {
    const addedCardList = [...todoCardList]
    const newCard = {
      id: randomID(),
      text: addCardText,
      doneFlag: false,
    }
    addedCardList.push(newCard)

    setTodoCardList(addedCardList)
    setClickAdd(false)
    setAddCardText('')
  }

  return (
    <TodoAppWrap>
      <Header
        onAddClick={() => setClickAdd(!clickAdd)}
      />
      <MainArea
        todoCardList={todoCardList}
        setTodoCardList={setTodoCardList}
      />
      {
        clickAdd && (
          <AddDialog
            addCardText={addCardText}
            setAddCardText={setAddCardText}
            onCancelClick={() => setClickAdd(false)}
            onConfirmClick={() => addCard(addCardText)}
          />
        )
      }
    </TodoAppWrap>
  )
}

const TodoAppWrap = styled.div`
  height: 100vh;
`
