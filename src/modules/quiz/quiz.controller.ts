import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common'
import { QuizService } from './quiz.service'
import { CreateQuizDto } from './dto/CreateQuiz.dto'

@Controller('quiz')
export class QuizController {
   constructor(private readonly quizService: QuizService) {}

   @Get('/')
   getAllQuizzes() {
      return this.quizService.getAllQuizzes()
   }

   @Post('/')
   @UsePipes(ValidationPipe)
   createQuiz(@Body() quiz:CreateQuizDto) {
    return this.quizService.createQuiz(quiz)
   }
}
