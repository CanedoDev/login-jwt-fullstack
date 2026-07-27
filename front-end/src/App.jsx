import Container from './Components/layout/Container.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './Components/pages/Register.jsx'
import Login from './Components/pages/Login.jsx'
import MemberSpace from './Components/pages/MemberSpace.jsx'
import Navbar from './Components/layout/Navbar.jsx'

function App() {
    return (
        <Container>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/memberSpace' element={<MemberSpace />} />
            </Routes>
        </Container>
    )
}

export default App
