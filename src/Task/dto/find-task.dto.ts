import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'

import { TaskStatus } from '../schemas'

export class FindTaskDto {
	@ApiProperty({ required: false })
	@IsOptional()
	@IsString()
	readonly description?: string

	@ApiProperty({ required: false })
	@Type(() => Date)
	@IsOptional()
	@IsDate()
	readonly start?: Date

	@ApiProperty({ required: false })
	@IsOptional()
	@Type(() => Date)
	@IsDate()
	readonly end?: Date

	@ApiProperty({ required: false })
	@IsOptional()
	@IsEnum(TaskStatus)
	readonly status?: TaskStatus

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString()
	readonly userId?: string
}
