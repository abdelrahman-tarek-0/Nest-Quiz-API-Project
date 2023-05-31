import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { QuizChoices } from './quiz-choices.entity';

@Entity('quizzes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'nvarchar',
    unique: true,
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @OneToMany(() => QuizChoices, (quizChoices) => quizChoices.quiz, {
    cascade: true,
  })
  choices: QuizChoices[];

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
