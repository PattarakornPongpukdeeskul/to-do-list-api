import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsNotEmpty, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateTaskDto {
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	readonly userId: string

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	readonly description: string

	@ApiProperty()
	@IsNotEmpty()
	@Type(() => Date)
	@IsDate()
	readonly start: Date

	@ApiProperty()
	@IsNotEmpty()
	@Type(() => Date)
	@IsDate()
	readonly end: Date
}
