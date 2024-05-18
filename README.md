Context API is used for this method. Context API can be initialised in two one with no default initialisation and one with initialisation. With initialisation, we can have:

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
       <App/>
    </ThemeProvider>

Another thing is that we need not to define the method in context API itself, we can define it with same variable name in App.jsx or other files.
In context API, if we don't want to use useContext(ThemeContext), we can use:

export default function useTheme(){
    return useContext(ThemeContext)
}
in the file where we are defining  our context API functionality. In this application, it is theme.js file.

And while changing theme and if we are using tailwind one major modification which is very important is:

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

Without this, we cannot see the changes.
darkMode:"class" 
This is of two types class and media, class will check if we have imported dark class in our application and media will check for our system configuration.
