
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCollectionInput {
    exampleField?: Nullable<number>;
}

export class UpdateCollectionInput {
    id: number;
}

export class CreateListingInput {
    layerZeroChainId: number;
    signer: string;
    buyer?: Nullable<string>;
    token: number;
    price: number;
    nonce: number;
    isCrosschain: boolean;
    startTime: number;
    endTime: number;
    status: number;
}

export class UpdateListingInput {
    id: number;
    price: number;
}

export class OrderByParams {
    field: string;
    direction: string;
}

export class CreateTokenInput {
    exampleField?: Nullable<number>;
}

export class UpdateTokenInput {
    id: number;
}

export class TokenInput {
    id: number;
    tokenId: number;
    listings: ListingInput[];
}

export class ListingInput {
    id: number;
    address: string;
    name: string;
    tokens: TokenInput[];
}

export class CreateUserInput {
    address: string;
    tokens: TokenInput[];
    listings: ListingInput[];
}

export class UpdateUserInput {
    id: number;
    tokens?: Nullable<Nullable<number>[]>;
    listings?: Nullable<Nullable<number>[]>;
}

export class Collection {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract collections(): Nullable<Collection>[] | Promise<Nullable<Collection>[]>;

    abstract collection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract listings(orderBy?: Nullable<OrderByParams>): Nullable<Listing>[] | Promise<Nullable<Listing>[]>;

    abstract listing(id: number): Nullable<Listing> | Promise<Nullable<Listing>>;

    abstract tokens(): Nullable<Token>[] | Promise<Nullable<Token>[]>;

    abstract token(id: number): Nullable<Token> | Promise<Nullable<Token>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCollection(createCollectionInput: CreateCollectionInput): Collection | Promise<Collection>;

    abstract updateCollection(updateCollectionInput: UpdateCollectionInput): Collection | Promise<Collection>;

    abstract removeCollection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;

    abstract createListing(createListingInput: CreateListingInput): Listing | Promise<Listing>;

    abstract updateListing(updateListingInput: UpdateListingInput): Listing | Promise<Listing>;

    abstract removeListing(id: number): Nullable<Listing> | Promise<Nullable<Listing>>;

    abstract createToken(createTokenInput: CreateTokenInput): Token | Promise<Token>;

    abstract updateToken(updateTokenInput: UpdateTokenInput): Token | Promise<Token>;

    abstract removeToken(id: number): Nullable<Token> | Promise<Nullable<Token>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Listing {
    id: number;
    layerZeroChainId: number;
    signer: string;
    buyer?: Nullable<string>;
    token: number;
    price: number;
    nonce: number;
    isCrosschain: boolean;
    startTime: number;
    endTime: number;
    status?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
}

export class Token {
    exampleField?: Nullable<number>;
}

export class TokenType {
    id: number;
    tokenId: number;
    listings: Listing[];
}

export class ListingType {
    id: number;
    address: string;
    name: string;
    tokens: Token[];
}

export class User {
    id: number;
    address: string;
    tokens: TokenType[];
    listings: ListingType[];
}

export type DateTime = any;
type Nullable<T> = T | null;
