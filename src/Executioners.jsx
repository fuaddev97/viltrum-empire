import { useState } from "react";
import executionersPropic from "./assets/executioners-propic.jpg"

export default function Executioners({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={executionersPropic} alt="Executioners" />
                <h1>Executioners</h1>
            </div>
        );
}