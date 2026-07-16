import { useState } from "react";
import Header from "./Header";
import "./Battles.css";
import battlesWallpaper from "./assets/battles-wp.webp";
import battlesImg1 from "./assets/battles-img-1.jpg";
import battlesImg2 from "./assets/battles-img-2.jpg";
import battlesImg3 from "./assets/battles-img-3.jpg";
import battlesImg4 from "./assets/battles-img-4.jpg";
import battlesImg5 from "./assets/battles-img-5.jpg";
import battlesImg6 from "./assets/battles-img-6.jpg";
import battlesImg7 from "./assets/battles-img-7.jpg";
import Footer from './Footer'


export default function Battles () {
    const [playOne, setPlayOne] = useState(false);
    const [playTwo, setPlayTwo] = useState(false);
    const [playThree, setPlayThree] = useState(false);
    const [playFour, setPlayFour] = useState(false);
    const [playFive, setPlayFive] = useState(false);
    const [playSix, setPlaySix] = useState(false);
    const [playSeven, setPlaySeven] = useState(false);
    
    return(
        <>
          <Header />
          <div className="battles-heading">
                      <img src={battlesWallpaper} alt="" className="battles-wallpaper" />
                      <div className="battles-overlay">
                          <h1 className="battles-quote">VILTRUM BATTLES<br /></h1>
                          <p>No victory is questioned. No defeat is remembered.</p>
                      </div>
          </div>
           <div className="battle-timeline">
                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlayOne(true)}>
                         {playOne ? (<iframe src="https://www.youtube.com/embed/o0TlCQC_ljw" title="Omni-Man vs Invincible" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg1} alt="Omni-Man vs The Guardians of the Globe" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">False Guardians Fall</span>
                        <h2>Omni-Man vs The Guardians of the Globe</h2>
                        <p>Omni-Man did not arrive as a hero—he arrived as truth. The Guardians of the Globe stood as symbols of Earth’s fragile belief in protection, but symbols do not equate to strength. One by one, they were dismantled with precision and purpose. Their unity faltered, their power proved insufficient, and their resistance changed nothing. This was not chaos—it was clarity. A demonstration that power alone defines authority. In the end, they did not fall to betrayal… they fell to superiority.</p>
                    </div>
                </div>

                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlayTwo(true)}>
                         {playTwo ? (<iframe src="https://www.youtube.com/embed/Ru4owY1Mu0Q" title="Omni-Man vs The Flaxans" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg2} alt="Omni-Man vs The Flaxans" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">Imperial Retribution</span>
                        <h2>Omni-Man vs The Flaxans</h2>
                        <p>When the Flaxans dared invade Earth, they believed numbers and persistence could overcome power. They were mistaken. Omni-Man entered their dimension not as a defender, but as devastation incarnate. Cities crumbled beneath his passage, armies were erased in moments, and their world was left broken as a warning to any who would challenge Viltrumite might. What began as an invasion ended as a lesson—swift, absolute, and unforgettable.</p>
                    </div>
                </div>

                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlayThree(true)}>
                         {playThree ? (<iframe src="https://www.youtube.com/embed/uykT_rA4TcA" title="Omni-Man vs The Immortal 2" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg3} alt="Omni-Man vs The Immortal 2" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">Defiance Silenced</span>
                        <h2>Omni-Man vs The Immortal 2</h2>
                        <p>Revived through desperate means, the Immortal returned driven by vengeance, clinging to the illusion that persistence could challenge power. He struck with fury, but fury is not strength. Omni-Man met him without hesitation, ending the conflict as decisively as before. There was no lesson left to teach—only a final confirmation. Some beings may rise again… but they do not rise stronger.</p>
                    </div>
                </div>

                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlayFour(true)}>
                         {playFour ? (<iframe src="https://www.youtube.com/embed/R7N_dKZyetI" title="Omni-Man vs Invincible" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg4} alt="Omni-Man vs Invincible" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">The Lesson of Blood</span>
                        <h2>Omni-Man vs Invincible</h2>
                        <p>When Invincible chose to resist, he forced a truth he was not yet ready to accept. This was never a battle for victory—it was a lesson in reality. Omni-Man did not fight to defeat his son, but to strip away the weakness that bound him to a lesser world. Every blow carried purpose, every moment a demonstration of the vast divide between them. In the end, the body endured… but the illusion of equality did not.</p>
                    </div>
                </div>

                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlayFive(true)}>
                         {playFive ? (<iframe src="https://www.youtube.com/embed/sJ71qfDqVsY" title="Battle of Thraxa" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg5} alt="The Battle of Thraxa" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">Punishment for Treason</span>
                        <h2>The Battle of Thraxa: Omni-Man & Invincible vs Lucan, Thula & Vidor</h2>
                        <p>On Thraxa, the Empire’s will was carried by Lucan, Thula, and Vidor—not as conquerors, but as executioners of justice. Nolan had abandoned his purpose, and his son followed in his failure. Such betrayal could not stand. What followed was not a clash of equals, but a necessary correction. Though the traitors resisted with desperation, their defiance only confirmed their weakness. The Empire does not forget. The Empire does not forgive.</p>
                    </div>
                </div>

                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlaySix(true)}>
                         {playSix ? (<iframe src="https://www.youtube.com/embed/za5OgFZsUds" title="Conquest vs Invincible" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg6} alt="Conquest vs Invincible" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">Unrestrained Supremacy</span>
                        <h2>Conquest vs Invincible</h2>
                        <p>When Conquest was dispatched, it was not to teach—but to break. He descended upon Invincible with relentless force, embracing the chaos of battle with cruel satisfaction. Every strike carried overwhelming power, every moment stretched into suffering. This was not discipline—it was domination laid bare. And though the traitor endured longer than expected, endurance is not victory. In the presence of true Viltrumite strength, resistance is nothing more than delay.</p>
                    </div>
                </div>

                <div className="battle-entry">
                    <div className="battle-video" onClick={() => setPlaySeven(true)}>
                         {playSeven ? (<iframe src="https://www.youtube.com/embed/6pqdX8mBruU" title="Thragg vs The Coalition of Planets" allowFullScreen></iframe>) : (<div className="video-thumbnail"><img src={battlesImg7} alt="Thragg vs The Coalition of Planets" loading="lazy" decoding="async" /><div className="play-button">▶</div></div>)}
                    </div>
                    <div className="battle-info">
                        <span className="battle-tag">The Empire Tested</span>
                        <h2>Thragg vs The Coalition of Planets</h2>
                        <p>At the gates of Viltrum, the so-called Coalition of Planets gathered in defiance, believing numbers could challenge destiny. They were met by Thragg and the warriors of Viltrum—not with hesitation, but with certainty. The void itself became a battlefield as fleets were shattered and bodies fell in silence. Even against overwhelming opposition, Viltrumite strength did not break. The Empire was tested… and the universe was reminded that it does not yield.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}