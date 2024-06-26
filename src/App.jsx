import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
function App() {

  const [themeMode, setThemeMode]=useState("light")
  const lightTheme=()=>{
   // console.log("light theme")
    setThemeMode("light");
  }

  const darkTheme=()=>{
    //console.log("dark theme")
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themebutton */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card/>
                    </div>
                </div>
       </div>
    </ThemeProvider>
  )
}

export default App
