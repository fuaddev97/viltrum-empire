import { useState } from "react";
import thulaPropic from "./assets/thula-propic.jpg"

export default function Thula({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={thulaPropic} alt="Thula" />
                <h1>Thula</h1>
            </div>
        );
}