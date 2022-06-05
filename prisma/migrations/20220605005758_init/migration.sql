-- CreateTable
CREATE TABLE "Listing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "signer" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "tokenId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "nonce" INTEGER NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
