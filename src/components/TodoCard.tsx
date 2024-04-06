import * as React from "react";
import { Todo } from "../types/types";
import { TodoCardWrap, TodoCardOparation, CardTitle, DeleteButton } from "../styles/components/todoCardStyle";

interface Props {
  operateIcon: string,
  todoCard: Todo
  handleDeleteCard: () => void
  handleOperateCard: () => void
}

export const TodoCard: React.FC<Props> = ({
  operateIcon,
  todoCard,
  handleDeleteCard,
  handleOperateCard,
}) => {
  return (
    <TodoCardWrap>
      <TodoCardOparation
        style={{
          opacity: todoCard.doneFlag ? 1 : 0.3,
          color: todoCard.doneFlag ? 'green': 'black',
        }}
        onClick={handleOperateCard}
      >️
        {operateIcon}
      </TodoCardOparation>
      <CardTitle>{todoCard.content}</CardTitle>
      <DeleteButton onClick={handleDeleteCard}>×</DeleteButton>
    </TodoCardWrap>
  )
}
