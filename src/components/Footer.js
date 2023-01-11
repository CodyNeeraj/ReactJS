import React from "react"

export default function Footer(props) {
    return (
        <div
            className="footer"
            style={{
                color: props.mode == "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
                textDecoration: "none",
            }}
        >
            <p>
                Made with 💖 by{" "}
                <a href="https://github.com/codyneeraj" target="_blank">
                    Neeraj {""}
                </a>
                in 🇮🇳
            </p>
        </div>
    )
}
