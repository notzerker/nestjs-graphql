import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}
  create(createListingInput: Prisma.ListingCreateInput) {
    return this.prisma.listing.create({
      data: createListingInput,
    });
  }

  findAll() {
    return this.prisma.listing.findMany();
  }

  findOne(listingWhereUniqueInput: Prisma.ListingWhereUniqueInput) {
    return this.prisma.listing.findUnique({
      where: listingWhereUniqueInput,
    });
  }

  // update(id: number, updateListingInput: UpdateListingInput) {
  //   return `This action updates a #${id} listing`;
  // }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
