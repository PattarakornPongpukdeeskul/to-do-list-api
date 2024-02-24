import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'
import { MockDBModule } from '../mockDB/mockDB.module'

@Module({
	controllers: [TaskController],
	providers: [TaskService],
	exports: [TaskService],
	imports: [MockDBModule],
})
export class TaskModule {}
