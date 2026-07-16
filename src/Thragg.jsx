import thraggPropic from "./assets/thragg-propic.jpg"

export default function Thragg({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={thraggPropic} alt="Thragg" loading="lazy" decoding="async" />
                <h1>Grand Regent Thragg</h1>
            </div>
        );
}