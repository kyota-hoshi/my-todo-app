import * as React from 'react';
import { MainArea } from './MainArea';
import { TodoCard } from './TodoCard';
import { useCards } from '../hooks/useCards';

export const TodoMainArea: React.FC = () => {
  const {
    todoCardList,
    softDeleteCard,
    toggleDoneCheck,
  } = useCards();

  const TodoCardComponents = (): React.ReactNode => {
    return (
      <>
        {todoCardList.filter(card => !card.deletedAt).map(card => (
            <TodoCard
              key={card.id}
              operateIcon='✔︎'
              todoCard={card}
              handleDeleteCard={() => softDeleteCard(card.id)}
              handleOperateCard={() => toggleDoneCheck(card.id)}
            />
          )
        )}
      </>
    )
  };

  return (
    <MainArea
      todoCardListComponent={<TodoCardComponents />}
    />
  )
}
