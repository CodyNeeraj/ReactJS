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
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        {props.title}
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                            <a class="nav-link" href="#">
                                Features
                            </a>
                            <a class="nav-link" href="#">
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
