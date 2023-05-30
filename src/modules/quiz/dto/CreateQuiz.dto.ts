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
   correctAnsStringLength,
   checkAnswerInAnswers,
} from 'src/decorators/createQuiz.decorators'

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

   @correctAnsStringLength(1, 255)
   @ArrayDistinct()
   @checkAnswerInAnswers('choices')
   correctAns: string | string[]
}

//   title: string;
//     description: string;
//     type: 'single' | 'multi';
//     answers : string[];
//     correctAns: string | string[];
