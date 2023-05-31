import {
  IsString,
  Length,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
} from 'class-validator';

import {
  distinctChoices,
  checkChoiceInsideChoices,
} from 'src/decorators/dto.decorators';

export class CreateQuizDto {
  @IsString()
  @Length(1, 255)
  title: string;

  @IsString()
  @Length(1, 4095)
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMaxSize(64)
  @ArrayMinSize(1)
  @checkChoiceInsideChoices()
  @distinctChoices()
  choices: {
    choice: string;
    imageUrl?: string;
    isCorrect?: boolean;
  }[];
}
