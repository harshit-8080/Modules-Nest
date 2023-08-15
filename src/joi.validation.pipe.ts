import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: Record<string, any>, metadata: ArgumentMetadata) {
    console.log('value --> ', value);

    const { error } = this.schema.validate(value);

    if (error) {
      console.log('Error ==> ', error);
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
