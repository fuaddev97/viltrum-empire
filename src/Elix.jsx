import { useState } from "react";
import elixPropic from "./assets/elix-propic.jpg"

export default function Elix({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={elixPropic} alt="Elix" />
                <h1>Elix</h1>
            </div>
        );
}