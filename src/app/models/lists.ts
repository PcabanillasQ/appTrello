import { Task } from "./task";

export interface Lists {
  id: number,
  idBoard: number,
  title: string,
  tasks: Task[]
}
