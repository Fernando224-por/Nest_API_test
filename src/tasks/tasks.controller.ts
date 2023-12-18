import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private TaskService: TasksService) {}
  @Get()
  findAll() {
    return 'get all Tasks';
  }
  @Get(':id')
  findOne() {
    return 'get one Tasks';
  }
  @Post()
  create() {
    return 'the task has been created!';
  }

  @Delete()
  delete() {
    return 'delete task';
  }

  @Put()
  update() {
    return 'update task';
  }
}
