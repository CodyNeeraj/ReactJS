import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import { useState } from "react"

function App() {
    const [mode, setMode] = useState("light")

    // Dark mode driver code (production grade business logic - DO NOT EDIT !!)
    const changeDisplayMode = () => {
        document.body.style.backgroundColor = "black"
        if (mode === "light") {
            setMode("dark")
        } else {
            setMode("light")
            document.body.style.backgroundColor = "white"
        }
    }
    return (
        <>
            <Navbar
                title="TextUtils"
                about="About us"
                // dispatching method to transport the above function as a prop
                toggleDisplayMode={changeDisplayMode}
                mode={mode}
            />
            <Textform heading="Enter text below to Analyse" mode={mode} />
        </>
    )
}

export default App
