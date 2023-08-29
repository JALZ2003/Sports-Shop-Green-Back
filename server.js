import express from "express";
import "dotenv/config.js";
import "./config/database.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

const ready = () => console.log(`Ready in ${PORT}`);

server.listen(PORT, ready);