import React, { useState } from "react"
import PropTypes from "prop-types"

function Navbar(props) {
    const [currentMode, setNewStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })

    const handleModeToggling = () => {
        if (currentMode.color === "black") {
            setNewStyle({
                color: "white",
                backgroundColor: "black",
            })
        } else {
            setNewStyle({
                color: "black",
                backgroundColor: "white",
            })
        }
    }

    return (
        <div>
            {/* Required to be both dark classes having same value at same time else it would be result in visible confusion */}
            {/* above code not valid for style element */}
            <nav
                className={`navbar navbar-expand-lg bg-${props.mode} navbar-${
                    props.mode
                } text-${props.mode === "dark" ? "white" : "dark"}`}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {props.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                            <a className="nav-link" href="#">
                                Features
                            </a>
                            <a className="nav-link" href="#">
                                {props.about}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            type="button"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="form-check form-switch mx-4">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        onClick={props.toggleDisplayMode}
                        id="flexSwitchCheckDefault"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                    >
                        Dark&nbsp;Mode
                    </label>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "TextUtils",
    about: "About Us",
}

export default Navbar
