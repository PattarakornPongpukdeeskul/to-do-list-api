import { Controller, Delete, Get, Patch, Post, Req, Body, Query } from '@nestjs/common'
import { Request } from 'express'
import { CreateTaskDto, FindTaskDto, UpdateDto } from './dto/'
import { TaskService } from './task.service'

@Controller('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get('/:id')
	async get(@Req() req: Request) {
		return this.taskService.get(req.params['id'])
	}

	@Get('/')
	async find(@Query() query: FindTaskDto) {
		return this.taskService.find(query)
	}

	@Post()
	async create(@Body() createTaskDto: CreateTaskDto) {
		return this.taskService.create(createTaskDto)
	}

	@Patch('/:id/complete')
	async complete(@Req() req: Request) {
		return this.taskService.complete(req.params['id'])
	}

	@Patch('/:id')
	async update(@Req() req: Request, @Body() updateDto: UpdateDto) {
		return this.taskService.update(req.params['id'], updateDto)
	}

	@Delete('/:id')
	async delete(@Req() req: Request) {
		return this.taskService.delete(req.params['id'])
	}
}
