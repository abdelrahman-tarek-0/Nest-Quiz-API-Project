import {
   registerDecorator,
   ValidationArguments,
   ValidationOptions,
} from 'class-validator'

// check if the array is distinct of any duplicate values and ignore strings
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

// check if the correct ans have a proper length and ignore any array input
export function correctAnsStringLength(
   min: number,
   max: number,
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

// check if the ans provided is in the list of the choices provided
export function checkAnswerInAnswers(
   property: string,
   validationOptions?: ValidationOptions
): Function {
   return (object: Object, propertyName: string): void => {
      registerDecorator({
         name: 'ArrayDistinct',
         target: object.constructor,
         propertyName,
         constraints: [property],
         options: validationOptions,
         validator: {
            validate(value: string[] | string, args): boolean {
               const [relatedProbityName] = args.constraints
               const prop = (args.object as any)[relatedProbityName] as string[]

               if (typeof value === 'string') {
                  return prop.includes(value)
               } else if (
                  Array.isArray(value) &&
                  value.length > 0 &&
                  value.length <= prop?.length
               ) {
                  return value.every((element) => {
                     return prop.includes(element)
                  })
               }

               return false
            },
            defaultMessage(args: ValidationArguments): string {
               const [relatedProbityName] = args.constraints
               const prop = (args.object as any)[relatedProbityName] as string[]
               return `${args.property} must be in the [${prop}] choices`
            },
         },
      })
   }
}
