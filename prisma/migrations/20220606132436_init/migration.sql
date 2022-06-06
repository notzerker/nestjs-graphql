-- CreateTable
CREATE TABLE "Listing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "layerZeroChainId" INTEGER NOT NULL,
    "signer" TEXT NOT NULL,
    "buyer" TEXT,
    "collection" TEXT NOT NULL,
    "tokenId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "nonce" INTEGER NOT NULL,
    "isCrosschain" BOOLEAN NOT NULL,
    "status" INTEGER NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
