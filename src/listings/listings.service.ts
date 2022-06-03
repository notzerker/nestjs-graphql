import { Injectable } from '@nestjs/common';
import { CreateListingInput } from './dto/create-listing.input';
import { UpdateListingInput } from './dto/update-listing.input';

@Injectable()
export class ListingsService {
  create(createListingInput: CreateListingInput) {
    return 'This action adds a new listing';
  }

  findAll() {
    return [
      {
        exampleField: 1,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} listing`;
  }

  update(id: number, updateListingInput: UpdateListingInput) {
    return `This action updates a #${id} listing`;
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
