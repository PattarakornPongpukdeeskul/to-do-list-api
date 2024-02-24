import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsOptional, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateDto {
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
}
