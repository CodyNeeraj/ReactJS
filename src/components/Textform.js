import React from "react";

export default function Textform(props) {
    return (
        <div class="container">
            <form>
                <div class="mb-3">
                    <h1 class="mt-5 mb-3">{props.heading}</h1>
                    <div class="mb-3">
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="9"
                        ></textarea>
                    </div>
                    <div id="emailHelp" class="form-text">
                        We'll never share your data with anyone else.
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
