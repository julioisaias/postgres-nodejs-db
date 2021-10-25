const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFile = dotenv.config();

if (envFile.error) {
  throw new Error("env file is missing");
}

module.exports = {
  HOSTNAME: process.env.HOSTNAME,
  PORT: parseInt(process.env.PORT) || 3000,
  DB_URL: process.env.DB_URL
};