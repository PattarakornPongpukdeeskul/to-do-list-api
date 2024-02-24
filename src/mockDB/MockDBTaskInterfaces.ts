import { TaskImpl, TaskProps } from '../Task/schemas'

export interface MockDBTaskInterfaces {
	create(userId: string, description: string, start: Date, end: Date): TaskImpl
	save(data: TaskProps): void
	delete(id: string): void
	get(id: string): TaskImpl
	findBy(findBy: Partial<Omit<TaskProps, 'id'>>): TaskImpl[]
}
