import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()

    return (
        <nav className="w-full max-w-xl mx-auto mb-8 px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-200/60 dark:border-slate-800 rounded-full shadow-lg shadow-purple-900/10 dark:shadow-black/40 flex justify-between items-center text-gray-800 dark:text-white transition-all">
            {/* Logo / Marca */}
            <Link to="/" className="flex items-center gap-2 font-bold text-base tracking-wide hover:opacity-80 transition-opacity">
                <span>My<span className="text-purple-600 dark:text-purple-400">App</span></span>
            </Link>

            {/* Links */}
            <ul className="flex items-center space-x-1">
                <li>
                    <Link
                        to="/login"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${location.pathname === '/login'
                                ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/30'
                                : 'text-gray-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-slate-800/60'
                            }`}
                    >Login</Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${location.pathname === '/register'
                                ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/30'
                                : 'text-gray-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-slate-800/60'
                            }`}
                    >Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar