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

