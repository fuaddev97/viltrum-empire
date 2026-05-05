import { useState } from "react";
import lucanPropic from "./assets/lucan-propic.jpg"

export default function Lucan({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={lucanPropic} alt="Lucan" />
                <h1>Lucan</h1>
            </div>
        );
}