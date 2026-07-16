import anessaPropic from "./assets/anessa-propic.jpg"

export default function Anessa({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={anessaPropic} alt="Anessa" loading="lazy" decoding="async" />
                <h1>Anessa</h1>
            </div>
        );
}