-- CreateTable
CREATE TABLE "PM" (
    "humidity" REAL NOT NULL,
    "pm10" REAL NOT NULL,
    "pm25" REAL NOT NULL,
    "pressure" REAL NOT NULL,
    "temperature" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CO" (
    "lat" REAL NOT NULL,
    "lon" REAL NOT NULL,
    "CO" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PM_timestamp_key" ON "PM"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "CO_timestamp_key" ON "CO"("timestamp");
