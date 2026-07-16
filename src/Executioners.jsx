import executionersPropic from "./assets/executioners-propic.jpg"

export default function Executioners({ onClick }) {
        return (
            <div className="container" onClick={onClick}>
                <img src={executionersPropic} alt="Executioners" loading="lazy" decoding="async" />
                <h1>Executioners</h1>
            </div>
        );
}