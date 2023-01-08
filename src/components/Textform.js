import React, { useState } from "react"

export default function Textform(props) {
    const [text, setText] = useState()

    // Initially this hook is kept to empty as the default value  of the placehlder down there
    const handleUpClick = () => {
        // console.log("clicked" + text)
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
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
                        rows="9"
                        value={text}
                    ></textarea>
                </div>
                <div className="form-text">
                    We'll never share your data with anyone else.
                </div>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">
                Convert to UpperCase
            </button>
        </div>
    )
}
