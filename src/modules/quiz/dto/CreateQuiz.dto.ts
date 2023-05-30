import {
   IsString,
   Length,
   IsArray,
   ArrayMaxSize,
   ArrayMinSize
} from 'class-validator'

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
   @Length(2, 2, {
      each: true,
   })
   @ArrayMaxSize(64)
   @ArrayMinSize(1)
   answers: string[]


   correctAns: string | string[]
}

//   title: string;
//     description: string;
//     type: 'single' | 'multi';
//     answers : string[];
//     correctAns: string | string[];
