import {
   registerDecorator,
   ValidationArguments,
   ValidationOptions,
} from 'class-validator'

export function ArrayDistinct(validationOptions?: ValidationOptions): Function {
   return (object: Object, propertyName: string): void => {
      registerDecorator({
         name: 'ArrayDistinct',
         target: object.constructor,
         propertyName,
         options: validationOptions,
         validator: {
            validate(value: string[] | string): boolean {
               if (Array.isArray(value)) {
                  return new Set(value).size === value.length
               } else if (typeof value === 'string') {
                  return true
               }
               return false
            },
            defaultMessage(args: ValidationArguments): string {
               return `${args.property} must not contains duplicate entry `
            },
         },
      })
   }
}

export function correctAnsStringLength(
    min:number,
    max:number,
   validationOptions?: ValidationOptions
): Function {
   return (object: Object, propertyName: string): void => {
      registerDecorator({
         name: 'ArrayDistinct',
         target: object.constructor,
         propertyName,
         options: validationOptions,
         validator: {
            validate(value: string[] | string): boolean {

               if (Array.isArray(value)) {
                  return true
               } else if (
                  typeof value === 'string' &&
                  value.length >= min &&
                  value.length <= max
               ) {
                  return true
               }
               return false
            },
            defaultMessage(args: ValidationArguments): string {


               return `${args.property} must not be between ${min} and ${max} characters`
            },
         },
      })
   }
}
