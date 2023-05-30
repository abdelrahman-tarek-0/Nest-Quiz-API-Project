import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module'
import helmet from 'helmet'

async function bootstrap() {
   const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    rawBody:true
   })

   app.useBodyParser("json",{limit:'10kb'})
   app.enableCors()
   app.use(helmet())

   await app.listen(3000)
}
bootstrap()
