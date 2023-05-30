import { Injectable } from '@nestjs/common'

@Injectable()
export class QuizService {
   getAllQuizzes() {
      return [
         {
            id:"022245",
            quiz: 'this is some quiz text',
            answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4'],
         },
         {
            id:"022246",
            quiz: 'this is some quiz text 2',
            answers: ['ans 1', 'ans 2', 'ans 3'],
         },
         {
            id:"022247",
            quiz: 'this is some quiz text 3',
            answers: ['ans 1', 'ans 2'],
         }
      ]
   }
}
