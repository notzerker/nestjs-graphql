import { CreateListingInput } from './create-listing.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateListingInput extends PartialType(CreateListingInput) {
  id: number;
}
