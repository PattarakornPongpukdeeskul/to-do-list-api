import { v4 as uuid } from 'uuid'

import { TaskProps, TaskImpl, TaskStatus } from 'Task/schemas'

import { MockDBTaskInterfaces } from './MockDBTaskInterfaces'

export class MockDBTaskImpl implements MockDBTaskInterfaces {
	private databaseCollection: TaskProps[] = []

	public create(userId: string, description: string, start: Date, end: Date) {
		const now = new Date()
		const newTask = new TaskImpl(
			uuid(),
			now,
			now,
			userId,
			description,
			new Date(start),
			new Date(end),
			TaskStatus.Waiting
		)
		this.databaseCollection.push(newTask)
		return newTask
	}

	public save(newData: TaskProps) {
		const updatedDate = { ...newData, updatedAt: new Date() }
		const updatedCollection = this.databaseCollection.map(data => {
			if (data.id === newData.id) {
				return updatedDate
			}

			return data
		})

		this.databaseCollection = updatedCollection
		return this.toTransformTaskImpl(updatedDate)
	}

	public delete(id: string) {
		const newDatabaseCollection = [...this.databaseCollection].filter(data => data.id !== id)
		this.databaseCollection = newDatabaseCollection
		return
	}

	public get(id: string) {
		const result = this.databaseCollection.find(data => data.id === id)

		if (result) {
			return this.toTransformTaskImpl(this.databaseCollection.find(data => data.id === id))
		}

		return undefined
	}

	public findBy(findBy: Partial<Omit<TaskProps, 'id'>>) {
		const { description, start, end, status, userId } = findBy

		return this.toTransformTaskImplAll(
			this.databaseCollection
				.filter(data => {
					const checkWithDescription = description
						? new RegExp(description, 'si').test(data.description)
						: true
					const checkWithStart = start ? +data.start >= +new Date(start) : true
					const checkWithEnd = end ? +data.end <= +new Date(end) : true
					const checkWithStatus = status ? data.status === status : true
					const checkWithUserId = userId ? data.userId === userId : true

					return checkWithDescription && checkWithStart && checkWithEnd && checkWithStatus && checkWithUserId
				})
				.sort((a, b) => +a.end - +b.end)
		)
	}

	private toTransformTaskImpl(task: TaskProps) {
		return new TaskImpl(
			task.id,
			task.createdAt,
			task.updatedAt,
			task.userId,
			task.description,
			task.start,
			task.end,
			task.status
		)
	}

	private toTransformTaskImplAll(tasks: TaskProps[]) {
		return tasks.map(task => this.toTransformTaskImpl(task))
	}
}
