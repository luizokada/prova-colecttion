import mongooese from "mongoose"

mongooese.connect("mongodb+srv://luiz:123@colecttion.qnwn2.mongodb.net/colecttion");

let db = mongooese.connection;

export default db;