import React, { useState } from "react"

export default function Textform(props) {
    const [text, setText] = useState("")

    const [currentMode, setNewStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })
    const [currTitle, setTitle] = useState("Dark Mode")

    // Initially this hook is kept to empty as the default value  of the placehlder down there
    const handleUpClick = () => {
        // console.log("clicked" + text)
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClrClick = () => {
        setText("")
    }

    const handleModeToggling = () => {
        console.log(currentMode)
        if (currentMode.color === "black") {
            setNewStyle({
                color: "white",
                backgroundColor: "black",
            })
            setTitle("Light Mode")
        } else {
            setNewStyle({
                color: "black",
                backgroundColor: "white",
            })
            setTitle("Dark Mode")
        }
    }

    return (
        <div className="container" style={currentMode}>
            <div className="mb-3" style={currentMode}>
                <h1 className="mt-3 mb-3" style={currentMode}>
                    {props.heading}
                </h1>
                <div style={currentMode}>
                    <textarea
                        style={currentMode}
                        placeholder="Please Enter something..."
                        onChange={handleOnChange}
                        spellCheck="false"
                        className="mb-3 form-control"
                        id="my-Box"
                        rows="5"
                        value={text}
                    ></textarea>
                </div>
                <div style={currentMode} className="form-text">
                    We'll never share your data with anyone else.
                </div>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-1">
                Capitalise
            </button>
            <button onClick={handleLowClick} className="btn btn-primary mx-1">
                SmallCase
            </button>
            <button onClick={handleClrClick} className="btn btn-danger mx-1">
                Clear
            </button>
            <button
                onClick={handleModeToggling}
                className="btn btn-danger mx-1"
            >
                {currTitle}
            </button>
            <div style={currentMode} className="container my-3">
                <h3 style={currentMode}>Analysis Below:</h3>
                <p style={currentMode}>
                    {text.split(" ").reduceRight.length - 1} Words and{" "}
                    {text.length} characters <br />
                    {0.008 * text.length} Minutes to read
                </p>
                <h3 style={currentMode} className="my-2">
                    The text you've typed is:
                </h3>
                <p style={currentMode}>
                    {text.length > 0
                        ? text
                        : "Try typing out something in the field above"}
                </p>
            </div>
        </div>
    )
}
