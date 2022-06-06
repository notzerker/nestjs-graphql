import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams } from 'src/graphql';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}
  create(createListingInput: Prisma.ListingCreateInput) {
    return this.prisma.listing.create({
      data: createListingInput,
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field, direction } = orderBy || {};
    return this.prisma.listing.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(listingWhereUniqueInput: Prisma.ListingWhereUniqueInput) {
    return this.prisma.listing.findUnique({
      where: listingWhereUniqueInput,
    });
  }

  // update(id: number, updateListingInput: Prisma.ListingUpdateInput) {
  //   return this.prisma.listing.update({
  //     where: { id },
  //     data: updateListingInput,
  //   });
  // }

  remove(listingWhereUniqueInput: Prisma.ListingWhereUniqueInput) {
    return this.prisma.listing.delete({
      where: listingWhereUniqueInput,
    });
  }
}
