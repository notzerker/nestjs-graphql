-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "layerZeroChainId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "strategy" TEXT NOT NULL,
    "nonce" INTEGER NOT NULL,
    "isCrosschain" BOOLEAN NOT NULL,
    "status" INTEGER NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tokenId" INTEGER NOT NULL,
    "makerAddress" TEXT NOT NULL,
    "takerAddress" TEXT,
    CONSTRAINT "Listing_makerAddress_fkey" FOREIGN KEY ("makerAddress") REFERENCES "User" ("address") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Listing_takerAddress_fkey" FOREIGN KEY ("takerAddress") REFERENCES "User" ("address") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Listing_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tokenId" INTEGER NOT NULL,
    "ownerId" INTEGER,
    "collectionId" INTEGER,
    CONSTRAINT "Token_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Token_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Listing_tokenId_key" ON "Listing"("tokenId");
