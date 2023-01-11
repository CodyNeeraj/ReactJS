import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import { useState } from "react"
import Alert from "./components/Alert"
import Footer from "./components/Footer"

function App() {
    const [mode, setMode] = useState("light")

    // Dark mode driver code (production grade business logic - DO NOT EDIT !!)
    const changeDisplayMode = () => {
        // what we're doing over here ??
        // document.body.style.backgroundColor = "black"
        if (mode === "light") {
            setMode("dark")
            document.body.style.backgroundColor = "black"
            showAlert("Dark Mode enabled", "success")
        } else {
            setMode("light")
            document.body.style.backgroundColor = "white"
            showAlert("Light Mode enabled", "success")
        }
    }

    const [alert, setAlert] = useState(null)

    // Dispatcher function, to be called from another files when invoking custom alerts
    const showAlert = (message, type, typeToDisplay = "Info") => {
        setAlert({
            message: message,
            type: type,
            typeToDisplay: typeToDisplay,
        })

        // timeout for auto-dismissing the alert dialog
        setTimeout(() => {
            setAlert(null)
        }, 3000)
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
            <Alert alert={alert} />
            <Textform
                heading="Enter text below to Analyse"
                mode={mode}
                showAlert={showAlert}
            />
            <Footer mode={mode} />
        </>
    )
}

export default App
