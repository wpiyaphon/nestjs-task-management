export interface Task {
  id: string;
  title: string;
  description: string;
  taskStatus: TaskStatus;
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
