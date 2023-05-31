import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { QuizModule } from './modules/quiz/quiz.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Quiz } from './modules/quiz/entities/quiz.entity'

@Module({
   imports: [
      QuizModule,
      TypeOrmModule.forRoot({
         type: 'sqlite',
         database: 'quizDB.db',
         entities: [__dirname + '/**/*.entity{.ts,.js}'],
         synchronize: true,
      })
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
