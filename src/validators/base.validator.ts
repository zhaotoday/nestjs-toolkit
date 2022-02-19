import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

@ValidatorConstraint()
export class BaseValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return (
      text.length >= args.constraints[0] && text.length <= args.constraints[1]
    );
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.constraints[0]}-${args.constraints[1]}`;
  }
}
