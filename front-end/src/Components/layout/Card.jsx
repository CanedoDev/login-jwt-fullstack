function Card({ children, title, subtitle, className = '' }) {
    return (
        <section className="w-full flex justify-center items-center">
            <div className={`w-full max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-purple-100 dark:border-slate-800 rounded-2xl p-8 shadow-2xl shadow-purple-950/20 text-center ${className}`}>
                {title && <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>}
                {subtitle && <p className="text-sm text-gray-500 dark:text-slate-400 mb-6">{subtitle}</p>}
                {children}
            </div>
        </section>
    )
}

export default Card
