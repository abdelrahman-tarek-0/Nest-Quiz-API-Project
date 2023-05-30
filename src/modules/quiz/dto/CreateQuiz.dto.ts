import {
   IsString,
   Length,
   IsArray,
   ArrayMaxSize,
   ArrayMinSize,
   ArrayNotEmpty
} from 'class-validator'

import {
   ArrayDistinct,
   checkValueInArray,
} from 'src/decorators/dto.decorators'

export class CreateQuizDto {
   @IsString()
   @Length(1, 255)
   title: string

   @IsString()
   @Length(1, 4095)
   description: string

   @IsArray()
   @IsString({ each: true })
   @Length(1, 255, {
      each: true,
   })
   @ArrayMaxSize(64)
   @ArrayMinSize(1)
   @ArrayNotEmpty()
   @ArrayDistinct()
   choices: string[]

   @ArrayDistinct()
   @checkValueInArray('choices')
   correctAns: string | string[]
}
