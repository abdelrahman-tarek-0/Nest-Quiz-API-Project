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
