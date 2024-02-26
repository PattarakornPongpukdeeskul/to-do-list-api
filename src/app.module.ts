import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { TaskModule } from 'Task/task.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [ConfigModule.forRoot(), TaskModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
