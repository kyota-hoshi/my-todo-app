export interface Todo {
  id: string
  content: string
  doneFlag: boolean
  deletedAt?: string | null
}