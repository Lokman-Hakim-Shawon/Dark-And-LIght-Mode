import { useEffect, useState } from "react";

const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`h-screen dark:bg-black flex justify-center items-center`}>
            <button onClick={handleMode} className="border border-black p-5  dark:text-white dark:border-white bg-green-500 font-bold">
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
};

export default Home;
