import Card from "../layout/Card"
import Form from "../forms/Form"

function Register() {
    return (
        <Card
            title="Registrar"
            subtitle="Crie uma conta para entrar"
        >
            <Form
                btnText="Registrar"
                endpointUrl="http://localhost:3000/api/auth/register"
                isRegister={true}
            />
        </Card>
    )
}

export default Register