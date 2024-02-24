import { TaskStatus } from './types'

import { UpdateDto } from '../dto'

export interface TaskProps {
	readonly id: string
	readonly createdAt: Date
	readonly updatedAt: Date

	readonly userId: string
	readonly description: string
	readonly start: Date
	readonly end: Date
	readonly status: TaskStatus
}

export interface Task extends TaskProps {
	complete(): void
	update(updateDto: UpdateDto): void
}
