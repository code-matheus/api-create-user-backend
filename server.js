
import { PrismaClient } from '@prisma/client';
import express from "express";

const prisma = new PrismaClient();

const server = express()
server.use(express.json())


server.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).send('User created');
})

server.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(204).send('User updated');
})


server.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).send('User deleted');
})


server.get('/users', async (req, res) => {
    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        }) 
    }else {
        users = await prisma.user.findMany()
    }

   await prisma.user.findMany()

    res.status(200).json(users)
})



server.listen(3000)