
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateListingInput {
    exampleField?: Nullable<number>;
}

export class UpdateListingInput {
    id: number;
}

export class Listing {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract listings(): Nullable<Listing>[] | Promise<Nullable<Listing>[]>;

    abstract listing(id: number): Nullable<Listing> | Promise<Nullable<Listing>>;
}

export abstract class IMutation {
    abstract createListing(createListingInput: CreateListingInput): Listing | Promise<Listing>;

    abstract updateListing(updateListingInput: UpdateListingInput): Listing | Promise<Listing>;

    abstract removeListing(id: number): Nullable<Listing> | Promise<Nullable<Listing>>;
}

type Nullable<T> = T | null;
