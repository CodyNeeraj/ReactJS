import React, { useState } from "react"

export default function Textform(props) {
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
    const [text, setText] = useState("")

    return (
        <div className="container">
            <div className="mb-3">
                <h1 className="mt-3 mb-3">{props.heading}</h1>
                <div>
                    <textarea
                        placeholder="Please Enter something..."
                        onChange={handleOnChange}
                        spellCheck="false"
                        className="mb-3 form-control"
                        id="my-Box"
                        rows="5"
                        value={text}
                    ></textarea>
                </div>
                <div className="form-text">
                    We'll never share your data with anyone else.
                </div>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2">
                Convert to UpperCase
            </button>
            <button onClick={handleLowClick} className="btn btn-primary mx-2">
                Convert to LowerCase
            </button>
            <div className="container my-3">
                <h3>Analysis Below:</h3>
                <p>
                    {text.split(" ").length} Words and {text.length} characters{" "}
                    <br />
                    {0.008 * text.length} Minutes to read
                </p>
                <h2 className="my-2">Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
