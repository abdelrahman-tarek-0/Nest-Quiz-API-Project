import { Injectable } from '@nestjs/common'
import { QuizType } from 'src/types/quiz.types'

const quizzes: QuizType[] = [
   {
      id: '022245',
      quiz: 'this is some quiz text',
      answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4'],
      type: 'single',
      correctAns: 'ans 4',
   },
   {
      id: '022246',
      quiz: 'this is some quiz text 2',
      answers: ['ans 1', 'ans 2', 'ans 3'],
      type: 'single',
      correctAns: 'ans 3',
   },
   {
      id: '022247',
      quiz: 'this is some quiz text 3',
      type: 'multi',
      answers: ['ans 1', 'ans 2'],
      correctAns: ['ans 1', 'ans 2'],
   },
]




@Injectable()
export class QuizService {
   getAllQuizzes():QuizType[] {
      return quizzes.map((quiz) => {
         return { ...quiz, correctAns: undefined }
      })
   }
}
