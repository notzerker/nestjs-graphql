
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateListingInput {
    layerZeroChainId: number;
    signer: string;
    buyer?: Nullable<string>;
    collection: string;
    tokenId: number;
    price: number;
    nonce: number;
    isCrosschain: boolean;
    startTime: number;
    endTime: number;
    status: number;
}

export class UpdateListingInput {
    id: number;
}

export class Listing {
    id: number;
    layerZeroChainId: number;
    signer: string;
    buyer?: Nullable<string>;
    collection: string;
    tokenId: number;
    price: number;
    nonce: number;
    isCrosschain: boolean;
    startTime: number;
    endTime: number;
    status?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
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

export type DateTime = any;
type Nullable<T> = T | null;
