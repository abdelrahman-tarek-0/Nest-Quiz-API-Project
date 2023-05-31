import {
   BaseEntity,
   Entity,
   Column,
   ManyToOne,
   PrimaryGeneratedColumn,
} from 'typeorm'
import { Quiz } from './quiz.entity'

@Entity('quizzes-choices')
export class QuizChoices extends BaseEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column({
      type: 'nvarchar',
   })
   choice: string

   @Column({
      type: 'boolean',
      default: false,
   })
   isCorrect: boolean


   @ManyToOne(() => Quiz, (quiz) => quiz.choices, {})
   quiz: Quiz
}
