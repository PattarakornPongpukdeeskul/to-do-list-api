import { Module } from '@nestjs/common'

import { MockDBModule } from 'mockDB/mockDB.module'

import { TaskController } from './task.controller'
import { TaskService } from './task.service'

@Module({
	controllers: [TaskController],
	providers: [TaskService],
	exports: [TaskService],
	imports: [MockDBModule],
})
export class TaskModule {}
