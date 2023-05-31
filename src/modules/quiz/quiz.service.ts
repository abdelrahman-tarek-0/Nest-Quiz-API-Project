import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { Quiz } from './entities/quiz.entity';

import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizRepo: Repository<Quiz>) {}

  async getAllQuizzes(): Promise<Quiz[]> {
    const quizzes = await this.quizRepo.find({
      select: {
        id: true,
        title: true,
        description: true,
        choices: {
          id: true,
          choice: true,
          imageUrl: true,
        },
      },
      relations: {
        choices: true,
      },
    });
    return quizzes;
  }

  async createQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    let newQuiz = this.quizRepo.create(quiz);

    newQuiz = await newQuiz.save();

    return newQuiz;
  }
}
