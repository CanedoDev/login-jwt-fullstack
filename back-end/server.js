import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 3000
const JWT_SECRET = process.env.JWT_SECRET
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.use(cors())
app.use(express.json())



app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Dados invalidos' })
        }

        const trimmedName = name.trim()
        const trimmedEmail = email.trim().toLowerCase()

        if (!trimmedName || !trimmedEmail || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos' })
        }

        if (trimmedName.length < 3) {
            return res.status(400).json({ message: 'Nome deve ter pelo menos 3 caracteres' })
        }

        if (!emailRegex.test(trimmedEmail)) {
            return res.status(400).json({ message: 'Email invalido' })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Senha deve ter pelo menos 6 caracteres' })
        }

        const userAlreadyExists = await prisma.user.findUnique({
            where: { email: trimmedEmail }
        })

        if (userAlreadyExists) {
            return res.status(409).json({ message: 'Email ja cadastrado' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                name: trimmedName,
                email: trimmedEmail,
                password: hashedPassword
            }
        })

        return res.status(201).json({ message: 'Usuario criado com sucesso' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
})

app.post('/api/auth/login', async (req, res) => {
    // buscar por email
    // comparar senha com bcrypt.compare
    // retornar sucesso ou erro
    try {
        const { email, password } = req.body

        if (typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Dados invalidos' })
        }

        const trimmedEmail = email.trim().toLowerCase()

        if (!trimmedEmail || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos' })
        }

        if (!emailRegex.test(trimmedEmail)) {
            return res.status(400).json({ message: 'Email invalido' })
        }

        const user = await prisma.user.findUnique({
            where: { email: trimmedEmail }
        })

        if (!user) {
            return res.status(401).json({ message: 'Email ou senha invalidos' })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Email ou senha invalidos' })
        }

        const token = jwt.sign(
            {id:user.id, email: user.email, name: user.name},
            JWT_SECRET,
            {expiresIn: '1d'}
        )

        return res.status(200).json({
            message: 'login realizado com sucesso',
            token,
            user: {id:user.id, email: user.email, name: user.name}
        })

        return res.status(200).json({ message: 'Login realizado com sucesso' })
    }
    catch (error) {
        console.error((error))
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }

})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
