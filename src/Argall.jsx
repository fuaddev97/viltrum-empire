import argallPropic from "./assets/argall-propic.jpg"

export default function Argall({ onClick }) {
    const imgStyle = {
    }
        return (
            <div className="container" onClick={onClick}>
                <img src={argallPropic} alt="Argall" />
                <h1>Emperor Argall</h1>
            </div>
        );
}