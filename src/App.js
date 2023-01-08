import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import { useState } from "react"

function App() {
    const [mode, setMode] = useState("light")

    const changeDisplayMode = () => {
        
      
    }
    return (
        <>
            <Navbar title="TextUtils" about="About us" mode={mode} />
            <Textform heading="Enter text below to Analyse" mode={mode} />
        </>
    )
}

export default App
