
function Container({ children, className = '' }) {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-white dark:from-purple-900 dark:via-purple-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="w-full max-w-4xl">
                {children}
            </div>
        </div>
    )
}

export default Container
