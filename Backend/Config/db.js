import dotenv from "dotenv";
import pg from "pg";
import { creatUsersTable } from "../Model/createUsersTable.js";
import { createProductsTable } from "../Model/createProductsTable.js";


dotenv.config();

console.log(process.env.DB_PORT);

