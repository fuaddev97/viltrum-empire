import kreggPropic from "./assets/kregg-propic.jpg"

export default function Kregg({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={kreggPropic} alt="Kregg" loading="lazy" decoding="async" />
                <h1>General Kregg</h1>
            </div>
        );
}