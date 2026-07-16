import thulaPropic from "./assets/thula-propic.jpg"

export default function Thula({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={thulaPropic} alt="Thula" loading="lazy" decoding="async" />
                <h1>Thula</h1>
            </div>
        );
}