import { Task } from "./task.model";

export interface Day {
    id: number,
    name: string,
    tasks: Task[]
}