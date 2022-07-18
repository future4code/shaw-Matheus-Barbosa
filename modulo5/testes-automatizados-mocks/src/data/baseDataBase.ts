import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
  },
});

export default connection