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
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    {props.about}
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
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
                            class="btn btn-sm btn-outline-secondary"
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
                        onClick={handleModeToggling}
                        id="flexSwitchCheckDefault"
                    />
                    <label
                        className="form-check-label"
                        forName="flexSwitchCheckDefault"
                    >
                        Dark&nbsp;Mode
                    </label>
                </div>

                {/* <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                class="btn btn-sm btn-outline-secondary"
                                type="button"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav> */}
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
