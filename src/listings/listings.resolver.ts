import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListingsService } from './listings.service';
import { CreateListingInput } from './dto/create-listing.input';
import { UpdateListingInput } from './dto/update-listing.input';

@Resolver('Listing')
export class ListingsResolver {
  constructor(private readonly listingsService: ListingsService) {}

  @Mutation('createListing')
  create(@Args('createListingInput') createListingInput: CreateListingInput) {
    return this.listingsService.create(createListingInput);
  }

  @Query('listings')
  findAll() {
    return this.listingsService.findAll();
  }

  @Query('listing')
  findOne(@Args('id') id: number) {
    return this.listingsService.findOne(id);
  }

  @Mutation('updateListing')
  update(@Args('updateListingInput') updateListingInput: UpdateListingInput) {
    return this.listingsService.update(updateListingInput.id, updateListingInput);
  }

  @Mutation('removeListing')
  remove(@Args('id') id: number) {
    return this.listingsService.remove(id);
  }
}
