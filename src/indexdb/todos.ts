import Dexie from "dexie";
import { Todo } from "../types/types";

const database = new Dexie('my-todo-app')
database.version(1).stores({ todos: '&id' })
const todos: Dexie.Table<Todo, string> = database.table('todos')

export const putTodo = async (newCard: Todo): Promise<void> => {
  await todos.put(newCard)
}

export const deleteTodo = async (deleteCardId: string): Promise<void> => {
  await todos.delete(deleteCardId)
}

export const getTodoList = async (): Promise<Todo[]> => {
  return await todos.toArray()
}

export const updateTodo = async (updatedCard: Todo): Promise<void> => {
  await todos.update(updatedCard.id, updatedCard)
}