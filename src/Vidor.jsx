import { useState } from "react";
import vidorPropic from "./assets/vidor-propic.jpg"

export default function Vidor({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={vidorPropic} alt="Vidor" />
                <h1>Vidor</h1>
            </div>
        );
}