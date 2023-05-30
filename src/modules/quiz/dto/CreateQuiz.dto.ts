import {
   IsString,
   Length,
   IsArray,
   ArrayMaxSize,
   ArrayMinSize
} from 'class-validator'

import { ArrayDistinct,correctAnsStringLength } from 'src/decorators/createQuiz.decorators'

export class CreateQuizDto {
   @IsString()
   @Length(1, 255 )
   title: string

   @IsString()
   @Length(1, 4095)
   description: string

   @IsString()
   @Length(5, 6)
   type: 'single' | 'multi'

   @IsArray()
   @IsString({ each: true })
   @Length(1, 255, {
      each: true,
   })
   @ArrayMaxSize(64)
   @ArrayMinSize(1)
   @ArrayDistinct()
   answers: string[]

   @correctAnsStringLength(1,255)
   correctAns: string | string[]
}

//   title: string;
//     description: string;
//     type: 'single' | 'multi';
//     answers : string[];
//     correctAns: string | string[];
