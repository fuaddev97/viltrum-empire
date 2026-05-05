import { useState } from "react";
import kraddPropic from "./assets/kradd-propic.jpg"

export default function Kradd({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={kraddPropic} alt="Kradd" />
                <h1>Kradd</h1>
            </div>
        );
}