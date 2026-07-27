import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "./Input"
import Submit from "./Submit"
import axios from "axios"

function Form({ btnText, endpointUrl, isRegister = false }) {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        setError('')
        setSuccess('')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const cleanEmail = user.email.trim()
        const cleanPassword = user.password.trim()
        const cleanName = user.name ? user.name.trim() : ''

        if (isRegister && (!cleanName || cleanName.length < 3)) {
            setError('O nome deve ter pelo menos 3 caracteres!')
            return
        }

        if (!cleanEmail || !cleanPassword) {
            setError('Por favor, preencha todos os campos!')
            return
        }

        const emailRegex = /\S+@\S+\.\S+/
        if (!emailRegex.test(cleanEmail)) {
            setError('Insira um e-mail válido (ex: usuario@email.com)!')
            return
        }

        if (cleanPassword.length < 6) {
            setError('A senha deve ter no mínimo 6 caracteres!')
            return
        }

        const dataToSend = isRegister
            ? { name: cleanName, email: cleanEmail, password: cleanPassword }
            : { email: cleanEmail, password: cleanPassword }

        setLoading(true)

        try {
            const response = await axios.post(endpointUrl, dataToSend)
            console.log('Resposta do backend:', response.data)

            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
            }

            setSuccess(response.data.message || 'Sucesso!')

            setTimeout(() => {
                navigate('/memberSpace')
            }, 800)

        } catch (err) {
            console.log('Erro na requisição:', err)
            const msg = err.response?.data?.message || 'Erro ao conectar com o servidor. Verifique se o backend está rodando!'
            setError(msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-1">
            {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-medium rounded-xl mb-4 text-center">
                    {error}
                </div>
            )}

            {success && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium rounded-xl mb-4 text-center">
                    {success}
                </div>
            )}

            {isRegister && (
                <Input
                    type="text"
                    name="name"
                    text="Nome"
                    placeholder="Digite seu nome"
                    value={user.name}
                    handleOnChange={handleChange}
                />
            )}

            <Input
                type="email"
                name="email"
                text="E-mail"
                placeholder="Digite seu e-mail"
                value={user.email}
                handleOnChange={handleChange}
            />
            <Input
                type="password"
                name="password"
                text="Senha"
                placeholder="Digite sua senha"
                value={user.password}
                handleOnChange={handleChange}
            />
            <Submit text={btnText} loading={loading} />
        </form>
    )
}

export default Form
