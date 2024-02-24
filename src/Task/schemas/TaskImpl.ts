import { Task } from './TaskInterfaces'
import { TaskStatus } from './types'

import { UpdateDto } from '../dto'

export class TaskImpl implements Task {
	constructor(
		public id: string,
		public createdAt: Date,
		public updatedAt: Date,

		public userId: string,
		public description: string,
		public start: Date,
		public end: Date,
		public status: TaskStatus
	) {}

	public complete() {
		this.status = TaskStatus.Complete
	}

	public update(updateDto: UpdateDto) {
		const { description, start, end } = updateDto
		if (description) {
			this.description = description
		}

		if (start) {
			this.start = start
		}

		if (end) {
			this.end = end
		}
	}
}
