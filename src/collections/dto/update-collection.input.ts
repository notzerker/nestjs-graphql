import { CreateCollectionInput } from './create-collection.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCollectionInput extends PartialType(CreateCollectionInput) {
  id: number;
}
