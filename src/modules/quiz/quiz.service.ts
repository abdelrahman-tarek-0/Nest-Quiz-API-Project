import { Injectable } from '@nestjs/common'
import { QuizType, QuizTypePost } from 'src/types/quiz.types'

const quizzes: QuizType[] = [
   {
      id: '022245',
      title: 'quiz 1',
      description: 'this is quiz 1',
      choices: ['ans 1', 'ans 2', 'ans 3', 'ans 4'],
      correctAns: 'ans 4',
   },
   {
      id: '022246',
      title: 'quiz 2',
      description: 'this is quiz 2',
      choices: ['ans 1', 'ans 2', 'ans 3'],
      correctAns: 'ans 3',
   },
   {
      id: '022247',
      title: 'quiz 3',
      description: 'this quiz 3',
      choices: ['ans 1', 'ans 2'],
      correctAns: ['ans 1', 'ans 2'],
   },
]

@Injectable()
export class QuizService {
   getAllQuizzes(): QuizType[] {
      return quizzes.map((quiz) => {
         return { ...quiz, correctAns: undefined }
      })
   }

   createQuiz(quiz: QuizTypePost): QuizType {
      const newQuiz: QuizType = {
         ...quiz,
         id: `0${Number(quizzes[quizzes.length - 1].id) + 1}`,
      }

      quizzes.push(newQuiz)
      return newQuiz
   }
}
