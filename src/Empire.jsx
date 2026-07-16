import Header from "./Header";
import headingImage from "./assets/thragg-img-3.jpg";
import "./Empire.css";
import empireImgOne from "./assets/empire-img-1.jpg";
import empireImgTwo from "./assets/empire-img-2.jpg";
import empireImgThree from "./assets/empire-img-3.jpg";
import empireImgFour from "./assets/empire-img-4.jpg";
import empireImgFive from "./assets/empire-img-5.jpg";
import empireImgSix from "./assets/empire-img-6.jpg";
import Footer from './Footer'

export default function Empire () {
    return(
        <>
        <Header />
        <div className="empire-heading">
            <img src={headingImage} alt="" className="heading-image" />
            <div className="empire-overlay">
              <h1 className="empire-quote">All worlds fall.<br /><span>Only Viltrum reigns.</span></h1>
            </div>
        </div>
        <div className="empire-content">
            <div className="content-one">
                <img src={empireImgOne} alt="Empire Image 1" loading="lazy" decoding="async" />
                <div className="content-passage">
                    <h2 className="passage-title">The Nature of the Empire</h2>
                    <p className="passage">We are not a people bound by borders, nor limited by the fragility of lesser worlds. We are Viltrumites. The Empire is not merely territory—it is order itself. Where we arrive, chaos is erased. Where we rule, purpose is restored. Countless civilizations have risen and fallen under their own weakness, but under Viltrum, all things endure. This is not conquest. This is correction.</p>
                </div>
            </div>
            <div className="content-two">
                <div className="content-passage">
                    <h2 className="passage-title">Strength Above All</h2>
                    <p className="passage">Weakness is the root of all collapse. We have seen it in every species that believed itself worthy of survival. Compassion without strength, unity without discipline, ambition without power—these are the lies that destroy worlds. We have purged such illusions from our own kind. Only the strong remain. Only the worthy carry the blood of Viltrum forward. This is why we do not fall.</p>
                </div>
                <img src={empireImgTwo} alt="Empire Image 2" loading="lazy" decoding="async" />
            </div>
            <div className="content-three">
                <img src={empireImgThree} alt="Empire Image 3" loading="lazy" decoding="async" />
                <div className="content-passage">
                    <h2 className="passage-title">The Right to Rule</h2>
                    <p className="passage">Other species question our dominion. They speak of freedom, of sovereignty, of choice. They misunderstand the nature of existence. Freedom without direction is decay. Sovereignty without strength is an illusion. We do not seek permission to rule—we define what rule means. The Empire does not ask. The Empire decides.</p>
                </div>
            </div>
            <div className="content-four">
                <div className="content-passage">
                    <h2 className="passage-title">Legacy of Conquest</h2>
                    <p className="passage">Thousands of planets now exist because we chose not to erase them. Entire civilizations stand only because we deemed them useful. Our history is written across the stars—not in ink, but in victory. Every world under our banner is proof of our purpose. Every resistance we crushed is proof of our inevitability.</p>
                </div>
                <img src={empireImgFour} alt="Empire Image 4" loading="lazy" decoding="async" />
            </div>
            <div className="content-five">
                <img src={empireImgFive} alt="Empire Image 5" loading="lazy" decoding="async" />
                <div className="content-passage">
                    <h2 className="passage-title">The Burden of Superiority</h2>
                    <p className="passage">To be Viltrumite is to carry the weight of truth. We do not have the luxury of doubt or hesitation. We see the universe as it is—broken, disordered, and in need of control. Others may call this cruelty. They are wrong. It is responsibility. It is duty. It is the only path forward.</p>
                </div>
            </div>
            <div className="content-six">
                <div className="content-passage">
                    <h2 className="passage-title">The Future</h2>
                    <p className="passage">There will come a time when no world remains untouched by our influence. No voice will rise in opposition. No force will stand in defiance. This is not arrogance—it is certainty. The Empire does not fade. The Empire does not weaken. The Empire expands, as it always has, as it always will.</p>
                </div>
                <img src={empireImgSix} alt="Empire Image 6" loading="lazy" decoding="async" />
            </div>
        </div>
        <Footer />
        </>
    );
}