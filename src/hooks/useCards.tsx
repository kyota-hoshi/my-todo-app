import * as React from "react";
import { ReactNode } from "react";

import { deleteTodo, getTodoList, putTodo, updateTodo } from "../indexdb/todos";
import { randomID } from "../util/util";
import { Todo } from "../types/types";

const {
  useState,
  useEffect,
  createContext,
  useContext,
} = React;

type UseCardsContextType = {
  todoCardList: Todo[];
  addCard: (addCardText: string) => void;
  softDeleteCard: (todoCardId: string) => void;
  deleteCardPermanently: (todoCardId: string) => void;
  toggleDoneCheck: (todoCardId: string) => void;
  undoSoftDeleteCard: (todoCardId: string) => void;
};

const UseCardsContext = createContext<UseCardsContextType>({
  todoCardList: [],
  addCard: () => {},
  softDeleteCard: () => {},
  deleteCardPermanently: () => {},
  toggleDoneCheck: () => {},
  undoSoftDeleteCard: () => {},
});

export const useCards = (): UseCardsContextType => {
  return useContext(UseCardsContext);
}

export const UseCardsProvider = ({ children }: { children: ReactNode }) => {
  const [todoCardList, setTodoCardList] = useState([]);

  useEffect(() => {
    getTodoList().then(setTodoCardList);
  }, []);

  const addCard = (addCardText: string): void => {
    const addedCardList = [...todoCardList];
    const newCard = {
      id: randomID(),
      content: addCardText,
      doneFlag: false,
    };
    addedCardList.push(newCard);
    putTodo(newCard);

    setTodoCardList(addedCardList);
  };

const softDeleteCard = (todoCardId: string): void => {
    const deletedCardList = todoCardList.map(card => {
      if (card.id === todoCardId) {
        card.deletedAt = new Date().toISOString();
        updateTodo(card);
      }
      return card;
    });
    setTodoCardList(deletedCardList);
  };

  const deleteCardPermanently = (todoCardId: string): void => {
    const deletedCardList = todoCardList.filter(card => card.id !== todoCardId);
    deleteTodo(todoCardId);
    setTodoCardList(deletedCardList);
  };

  const toggleDoneCheck = (todoCardId: string): void => {
    const toggledCardList = todoCardList.map(card => {
      if (card.id === todoCardId) {
        card.doneFlag = !card.doneFlag;
        updateTodo(card);
      }
      return card;
    });
    setTodoCardList(toggledCardList);
  };

  const undoSoftDeleteCard = (todoCardId: string): void => {
    const undoDeletedCardList = todoCardList.map(card => {
      if (card.id === todoCardId) {
        card.deletedAt = null;
        updateTodo(card);
      }
      return card;
    });
    setTodoCardList(undoDeletedCardList);
  };

  return (
    <UseCardsContext.Provider
      value={{
        todoCardList,
        addCard,
        softDeleteCard,
        deleteCardPermanently,
        toggleDoneCheck,
        undoSoftDeleteCard,
      }}
    >
      {children}
    </UseCardsContext.Provider>
  )
}
