import { PrismaClient } from "@prisma/client";
import { knex } from "knex";

// const db = knex({
//   client: 'better-sqlite3',
//   connection: {
//     filename: '../dev.db'
//   },
// })

const db = new PrismaClient({ log: ['info'] })

export { db }
