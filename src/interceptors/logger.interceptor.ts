import {
   Injectable,
   NestInterceptor,
   ExecutionContext,
   CallHandler,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { Request, Response } from 'express'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const now = Date.now()
      const req: Request = context.switchToHttp().getRequest()
      const res: Response = context.switchToHttp().getResponse()

      return next.handle().pipe(
         tap(() => {
            const finish = Date.now()
            const took = (finish - now).toFixed(3)

            console.log(
               `${req.method} ${req.originalUrl} ${res.statusCode} from ${
                  req.headers['x-forwarded-for'] || req.ip
               } ${took} ms ${req.headers.origin || ''}`
            )
         })
      )
   }
}
