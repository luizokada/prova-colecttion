import mongooese from "mongoose"

mongooese.connect("mongodb+srv://luiz:123@cluster0.qnwn2.mongodb.net/cluster0");

let db = mongooese.connection;

export default db;