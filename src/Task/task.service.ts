import { Injectable, Inject } from '@nestjs/common'

import { CreateTaskDto, FindTaskDto, UpdateDto } from './dto'
import { MockDBTaskImpl } from '../mockDB/mockDB.service'
import { TaskImpl, TaskProps } from './schemas'

@Injectable()
export class TaskService {
	constructor(@Inject('MockTaskDB') private readonly mockTaskDB: MockDBTaskImpl) {}

	async create(createTaskDto: CreateTaskDto) {
		return this.toTransformTask(
			this.mockTaskDB.create(
				createTaskDto.userId,
				createTaskDto.description,
				createTaskDto.start,
				createTaskDto.end
			)
		)
	}

	async get(id: string) {
		return this.mockTaskDB.get(id)
	}

	async find(query: FindTaskDto) {
		return this.toTransformTaskAll(this.mockTaskDB.findBy(query))
	}

	async update(id: string, updateDto: UpdateDto) {
		const completedTask = this.mockTaskDB.get(id)
		completedTask.update(updateDto)

		return this.toTransformTask(this.mockTaskDB.save(completedTask))
	}

	async complete(id: string) {
		const completedTask = this.mockTaskDB.get(id)
		completedTask.complete()

		return this.toTransformTask(this.mockTaskDB.save(completedTask))
	}

	async delete(id: string) {
		return this.mockTaskDB.delete(id)
	}

	private toTransformTask(task: TaskImpl): TaskProps {
		const { id, createdAt, updatedAt, userId, description, start, end, status } = task
		return { id, createdAt, updatedAt, userId, description, start, end, status }
	}

	private toTransformTaskAll(tasks: TaskImpl[]): TaskProps[] {
		return tasks.map(task => this.toTransformTask(task))
	}
}
