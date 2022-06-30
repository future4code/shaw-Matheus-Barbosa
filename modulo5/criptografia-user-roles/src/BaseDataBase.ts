import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();


export class BaseDatabase {

    protected connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.HOST,
            port: Number(process.env.PORT || "3306"),
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            multipleStatements: true
        },
    });
}