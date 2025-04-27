import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({ id });

    if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);

    return found;
  }

  // private tasks: Task[] = [];

  // getTasks(filterDto: GetTasksFilterDto): Task[] {
  //   const { search, status } = filterDto;
  //   let filteredTasks = this.tasks;

  //   if (search) {
  //     filteredTasks = filteredTasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   if (status) {
  //     filteredTasks = filteredTasks.filter((task) => task.status === status);
  //   }

  //   return filteredTasks;
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.TODO,
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  //   const task = await this.getTaskById(id);
  //   task.status = status;
  //   await this.tasksRepository.save(task);
  //   return task;
  // }

  // async deleteTask(id: string): Promise<void> {
  //   const found = await this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
}
