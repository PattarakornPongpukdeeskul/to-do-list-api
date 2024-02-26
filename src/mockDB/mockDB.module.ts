import { Module } from '@nestjs/common'

import { MockDBTaskImpl } from './mockDB.service'

@Module({
	providers: [
		{
			provide: 'MockTaskDB',
			useClass: MockDBTaskImpl,
		},
	],
	exports: ['MockTaskDB'],
})
export class MockDBModule {}
