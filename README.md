# live link: https://arkmonde-ek5yvswxm-lokman-hakim-shawon.vercel.app/

# Documentation

First of all, you need to create basic react app structer. Then you need to create a page like HOME page.
```javascript
const Homepage=()=>{
    return(
        <>
        </>
    )
}
export default Homepage;
```
then you have to go to tailwind.config.js and write darkMode class .
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}

```
Then you write a simple button sothat when you click the button then the dark mode will open.

```javascript
const Homepage=()=>{
    return(
        <>
        <button className="border border-black p-5 dark:text-white dark:border-white bg-green-500 ont-bold">
        Dark Mode
        </button>
        </>
    )
}
```
Then you need to use useState() and useEffect(). set class data in localStorage() for show mode in root class after reloading. 

```javascript
const Homepage=()=>{
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    return(
        <>
        <button className="border border-black p-5 dark:text-white dark:border-white bg-green-500 ont-bold">
        Dark Mode
        </button>
        </>
    )
}
export default Homepage;
```
Then you create a function for button handling.

```javascript
const Homepage=()=>{
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
    return(
        <>
        <button onClick={handleMode} className="border border-black p-5 dark:text-white dark:border-white bg-green-500 ont-bold">
        Dark Mode
        </button>
        </>
    )
}
export default Homepage;