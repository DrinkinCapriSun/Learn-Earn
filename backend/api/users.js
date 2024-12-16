const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
