import * as React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { MainArea } from "./components/MainArea";

const useState = React.useState;

export const TodoApp = () => {
  const [todoCardList, setTodoCardList] = useState([
    {
      id: '1',
      text: 'アプリ開発',
      doneFlag: true,
    },
    {
      id: '2',
      text: '単体テスト',
      doneFlag: false,
    },
  ])
  return (
    <TodoAppWrap>
      <Header />
      <MainArea
        todoCardList={todoCardList}
        setTodoCardList={setTodoCardList}
      />
    </TodoAppWrap>
  )
}

const TodoAppWrap = styled.div`
  height: 100vh;
`
