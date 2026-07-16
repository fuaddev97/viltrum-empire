import conquestPropic from "./assets/conquest-propic.jpg"

export default function Conquest({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={conquestPropic} alt="Conquest" loading="lazy" decoding="async" />
                <h1>Conquest</h1>
            </div>
        );
}