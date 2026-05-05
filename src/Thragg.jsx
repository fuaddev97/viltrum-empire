import { useState } from "react";
import thraggPropic from "./assets/thragg-propic.jpg"

export default function Thragg({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={thraggPropic} alt="Thragg" />
                <h1>Grand Regent Thragg</h1>
            </div>
        );
}