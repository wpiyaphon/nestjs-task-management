export interface Task {
  id: string;
  title: string;
  description: string;
  taskStatus: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
