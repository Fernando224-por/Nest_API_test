import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schemas';
import { createTaskDto, updateTaskDto } from 'src/dto/tasks.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  findAll() {
    this.taskModel.find();
  }
  async create(createTask: createTaskDto) {
    const newTask = new this.taskModel(createTask);
    await newTask.save();
    return newTask;
  }

  async FindOne(id: string) {
    return this.taskModel.findById(id);
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  async update(id: string, task: updateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task);
  }
}
