-- CreateTable
CREATE TABLE "Post" (
    "content" TEXT,
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sentimentScore" DOUBLE PRECISION,
    "sentimentMagnitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
