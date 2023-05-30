import { Controller, Get, Post, Body } from '@nestjs/common'
import { QuizService } from './quiz.service'
import { QuizTypePost } from 'src/types/quiz.types'

@Controller('quiz')
export class QuizController {
   constructor(private readonly quizService: QuizService) {}

   @Get('/')
   getAllQuizzes() {
      return this.quizService.getAllQuizzes()
   }

   @Post('/')
   createQuiz(@Body() quiz:QuizTypePost) {
    return this.quizService.createQuiz(quiz)
   }
}
