import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Injectable } from '@nestjs/common'
import { QuizType, QuizTypePost } from 'src/types/quiz.types'
import { Quiz } from './quiz.entity'

const quizzes: QuizType[] = [
   {
      id: '022245',
      title: 'quiz 1',
      description: 'this is quiz 1',
      choices: ['ans 1', 'ans 2', 'ans 3', 'ans 4'],
      correctAns: 'ans 4',
      createdAt: new Date(),
   },
   {
      id: '022246',
      title: 'quiz 2',
      description: 'this is quiz 2',
      choices: ['ans 1', 'ans 2', 'ans 3'],
      correctAns: 'ans 3',
      createdAt: new Date(),
   },
   {
      id: '022247',
      title: 'quiz 3',
      description: 'this quiz 3',
      choices: ['ans 1', 'ans 2'],
      correctAns: ['ans 1', 'ans 2'],
      createdAt: new Date(),
   },
]

@Injectable()
export class QuizService {
   constructor(@InjectRepository(Quiz) private quizRepo: Repository<Quiz>) {}

   async getAllQuizzes(): Promise<Quiz[]> {
      const quizzes =  await this.quizRepo.find({
         select:['id','title','description']
      })
      return quizzes
   }

   async createQuiz(quiz: QuizTypePost): Promise<Quiz> {
      let newQuiz = this.quizRepo.create(quiz)
      newQuiz = await newQuiz.save()
      
      return newQuiz
   }
}
