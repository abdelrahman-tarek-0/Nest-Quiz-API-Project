import {
   IsString,
   Length,
   IsArray,
   ArrayMaxSize,
   ArrayMinSize,
   ArrayNotEmpty,
} from 'class-validator'

import {
   distinctChoices,
   checkChoiceInsideChoices,
   validatorCb,
} from 'src/decorators/dto.decorators'

export class CreateQuizDto {
   @IsString()
   @Length(1, 255)
   title: string

   @IsString()
   @Length(1, 4095)
   description: string

   @IsArray()
   @ArrayNotEmpty()
   @ArrayMaxSize(64)
   @ArrayMinSize(1)
   @checkChoiceInsideChoices()
   @distinctChoices()
   @validatorCb(
      (value: any) => {
         if (
            value.imageUrl === undefined ||
            (typeof value.imageUrl === 'string' && value.imageUrl.length < 1023)
         ) {
            return true
         }
         return false
      },
      {
         message: 'imageUrl must be string less than 1023 characters',
         each: true,
      }
   )
   choices: {
      choice: string
      imageUrl?: string
      isCorrect?: boolean
   }[]
}
