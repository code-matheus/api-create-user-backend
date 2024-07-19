
import { PrismaClient } from '@prisma/client';
import express from "express";

const prisma = new PrismaClient();

const server = express()
server.use(express.json())

const users = []

server.post('/users', (req, res) => {
    prisma
})



server.listen(3000)