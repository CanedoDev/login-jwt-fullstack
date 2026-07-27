import Card from "../layout/Card"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function MemberSpace() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <Card
            title="Área de Membros"
            subtitle="Você está autenticado e no espaço exclusivo."
        >
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300">
                Bem-vindo ao dashboard restrito!
            </div>
            <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30">
                Sair da Conta (Logout)
            </button>
        </Card>

    )
}

export default MemberSpace
