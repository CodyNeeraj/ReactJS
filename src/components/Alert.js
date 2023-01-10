import React from "react"

export default function Alert(props) {
    const makefirstCaps = (alertType) => {
        const lowerStr = alertType.toLowerCase()
        return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1)
    }
    return (
        // Boolean execution meant only if not binding the whole component in one element !!
        props.alert && (
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{makefirstCaps(props.alert.type)}</strong>:{" "}
                {props.alert.message}
            </div>
        )
    )
}
