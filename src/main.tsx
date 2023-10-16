import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const render = () =>
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );

if (process.env.NODE_ENV === "production") {
    render();
} else if (process.env.NODE_ENV === "development") {
    import("../mocks/browser")
        .then(({ worker }) => {
            worker.start();
        })
        .then(() => {
            render();
        });
}
