-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enums
CREATE TYPE "UserRole" AS ENUM ('CLIENT', 'ENTREPRENEUR', 'ADMIN');
CREATE TYPE "ServiceStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- Create users table
CREATE TABLE IF NOT EXISTS "users" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "role" "UserRole" DEFAULT 'CLIENT' NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create categories table
CREATE TABLE IF NOT EXISTS "categories" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) UNIQUE NOT NULL,
    "slug" VARCHAR(255) UNIQUE NOT NULL,
    "description" TEXT,
    "icon" VARCHAR(100),
    "color" VARCHAR(50),
    "serviceCount" INTEGER DEFAULT 0 NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create services table
CREATE TABLE IF NOT EXISTS "services" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "title" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL,
    "shortDescription" TEXT,
    "image" TEXT,
    "price" DECIMAL(10, 2) NOT NULL,
    "duration" INTEGER NOT NULL,
    "rating" DECIMAL(3, 2) DEFAULT 0 NOT NULL,
    "reviewCount" INTEGER DEFAULT 0 NOT NULL,
    "status" "ServiceStatus" DEFAULT 'DRAFT' NOT NULL,
    "featured" BOOLEAN DEFAULT FALSE NOT NULL,
    "userId" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "categoryId" UUID NOT NULL REFERENCES "categories"("id"),
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create orders table
CREATE TABLE IF NOT EXISTS "orders" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "status" "OrderStatus" DEFAULT 'PENDING' NOT NULL,
    "totalPrice" DECIMAL(10, 2) NOT NULL,
    "message" TEXT,
    "completedAt" TIMESTAMP,
    "clientId" UUID NOT NULL REFERENCES "users"("id"),
    "sellerId" UUID NOT NULL REFERENCES "users"("id"),
    "serviceId" UUID NOT NULL REFERENCES "services"("id"),
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS "reviews" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "rating" INTEGER NOT NULL CHECK ("rating" >= 1 AND "rating" <= 5),
    "comment" TEXT,
    "userId" UUID NOT NULL REFERENCES "users"("id"),
    "serviceId" UUID NOT NULL REFERENCES "services"("id") ON DELETE CASCADE,
    "orderId" UUID UNIQUE NOT NULL REFERENCES "orders"("id"),
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS "idx_services_userId" ON "services"("userId");
CREATE INDEX IF NOT EXISTS "idx_services_categoryId" ON "services"("categoryId");
CREATE INDEX IF NOT EXISTS "idx_services_status" ON "services"("status");
CREATE INDEX IF NOT EXISTS "idx_services_featured" ON "services"("featured");
CREATE INDEX IF NOT EXISTS "idx_orders_clientId" ON "orders"("clientId");
CREATE INDEX IF NOT EXISTS "idx_orders_sellerId" ON "orders"("sellerId");
CREATE INDEX IF NOT EXISTS "idx_orders_serviceId" ON "orders"("serviceId");
CREATE INDEX IF NOT EXISTS "idx_reviews_serviceId" ON "reviews"("serviceId");
CREATE INDEX IF NOT EXISTS "idx_reviews_userId" ON "reviews"("userId");
