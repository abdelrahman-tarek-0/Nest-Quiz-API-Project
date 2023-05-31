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
            validate(value: unknown): boolean {
               if (
                  Array.isArray(value) &&
                  value.length > 0 &&
                  typeof value[0] === 'string'
               ) {
                  return new Set(value).size === value.length
               }

               if (
                  Array.isArray(value) &&
                  value.length > 0 &&
                  typeof value[0] === 'object'
               ) {
                  return (
                     new Set(value.map((item) => JSON.stringify(item))).size ===
                     value.length
                  )
               }

               if (typeof value === 'string') {
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
export function checkChoiceInsideChoices(
   validationOptions?: ValidationOptions
): Function {
   let choicesErr = []
   let isThereCorrect = false
   return (object: Object, propertyName: string): void => {
      registerDecorator({
         name: 'ArrayDistinct',
         target: object.constructor,
         propertyName,
         options: validationOptions,
         validator: {
            validate(value: unknown): boolean {
               if (Array.isArray(value) && typeof value?.at(0) === 'object') {
                  // choices have  { choice , isCorrect } structure distinct by choice
                  choicesErr = []
                  value.forEach((item,index) => {
                     if (item.choice === undefined || item.choice.length === 0) {
                        choicesErr.push(`choice is required at ${index}`)
                     }
                     if (item.isCorrect === true) {
                        isThereCorrect = true
                     }
                  })
                  if (isThereCorrect === false) {
                     choicesErr.push(`at least one choice must be correct`)
                  }

                  return choicesErr.length === 0
               }

               return false
            },
            defaultMessage(args: ValidationArguments): string {
               if (choicesErr.length > 0) {
                  return choicesErr.join(' \n ')
               }
               return `${args.property} is not valid must contain choice and isCorrect property`
            },
         },
      })
   }
}

export function distinctChoices(
   validationOptions?: ValidationOptions
): Function {
   return (object: Object, propertyName: string): void => {
      registerDecorator({
         name: 'ArrayDistinct',
         target: object.constructor,
         propertyName,
         options: validationOptions,
         validator: {
            validate(value: unknown): boolean {
               if (Array.isArray(value) && typeof value[0] === 'object') {
                  // choices have  { choice , isCorrect } structure distinct by choice
                  value = value.map((item) => item.choice)

                  return (
                     new Set(value as string[]).size ===
                     (value as string[]).length
                  )
               }

               return false
            },
            defaultMessage(args: ValidationArguments): string {
               return `${args.property} must not contains duplicate entry`
            },
         },
      })
   }
}

// check if the value is in the array
// property can be array ['22','2321']
// can be reference to another property in the class
// can be a string without not referencing to another property
export function checkValueInArray(
   property: string | string[],
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
               let prop: string[] = []
               const [relatedProbity] = args.constraints
               if (typeof relatedProbity === 'string') {
                  prop = (args.object as any)[relatedProbity] || [
                     relatedProbity,
                  ]
                  if (!Array.isArray(prop)) prop = []
               } else if (Array.isArray(relatedProbity)) {
                  prop = relatedProbity
               }

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
               let prop: string[] = []
               const [relatedProbity] = args.constraints
               if (typeof relatedProbity === 'string') {
                  prop = (args.object as any)[relatedProbity] || [
                     relatedProbity,
                  ]
               } else if (Array.isArray(relatedProbity)) {
                  prop = relatedProbity
               }

               return `${args.property} must be in the [${prop}] choices`
            },
         },
      })
   }
}
