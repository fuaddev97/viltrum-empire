import nolanPropic from "./assets/nolan-propic.jpg"

export default function Nolan({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={nolanPropic} alt="Nolan" loading="lazy" decoding="async" />
                <h1>Nolan</h1>
            </div>
        );
}