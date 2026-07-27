import Card from "../layout/Card"
import Form from "../forms/Form"

function Login() {
    return (
        <Card
            title="Entrar"
            subtitle="Insira seus dados para acessar sua conta"
        >
            <Form
                btnText="Entrar"
                endpointUrl="http://localhost:3000/api/auth/login"
            />
        </Card>
    )
}

export default Login
