import argallPropic from "./assets/argall-propic.jpg"

export default function Argall({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={argallPropic} alt="Argall" loading="lazy" decoding="async" />
                <h1>Emperor Argall</h1>
            </div>
        );
}