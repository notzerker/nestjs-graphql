import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListingsService } from './listings.service';
import { Prisma } from '@prisma/client';
import { OrderByParams } from 'src/graphql';

@Resolver('Listing')
export class ListingsResolver {
  constructor(private readonly listingsService: ListingsService) {}

  @Mutation('createListing')
  create(
    @Args('createListingInput') createListingInput: Prisma.ListingCreateInput,
  ) {
    return this.listingsService.create(createListingInput);
  }

  @Query('listings')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.listingsService.findAll(orderBy);
  }

  @Query('listing')
  findOne(@Args('id') id: number) {
    return this.listingsService.findOne({ id });
  }

  @Mutation('updateListing')
  update(
    @Args('updateListingInput') updateListingInput: Prisma.ListingUpdateInput,
  ) {
    return this.listingsService.update(
      updateListingInput.id,
      updateListingInput,
    );
  }

  @Mutation('removeListing')
  remove(@Args('id') id: number) {
    return this.listingsService.remove({ id });
  }
}
