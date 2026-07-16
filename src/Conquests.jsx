import conquestsWallpaper from "./assets/conquests-wp.jpg";
import Header from "./Header";
import "./Conquests.css";
import img1 from "./assets/conquests-img-1.jpg";
import img2 from "./assets/conquests-img-2.jpg";
import img3 from "./assets/conquests-img-3.jpg";
import img4 from "./assets/conquests-img-4.jpg";
import img5 from "./assets/conquests-img-5.webp";
import img6 from "./assets/conquests-img-6.webp";
import Footer from './Footer'

export default function Conquests () {
    return(
        <>
        <Header />
        <div className="conquests-heading">
            <img src={conquestsWallpaper} alt="" className="conquests-wallpaper" />
            <div className="conquests-overlay">
                <h1 className="conquests-quote">VILTRUM CONQUESTS<br /></h1>
            </div>
        </div>
        <div className="conquests-page">
          <div className="conquests-hero">
            <h1>CONQUESTS</h1>
            <p className="subtitle">Every world is a decision already made.</p>
          </div>

          <div className="timeline">
            
            <div className="timeline-item left">
              <div className="timeline-content">
                <img src={img1} alt="The First Expansions" loading="lazy" decoding="async" />
                <h2>The First Expansions</h2>
                <p><span>Our first steps beyond Viltrum were not cautious—they were decisive.</span><span>The twin worlds of <strong>Thraxus Prime</strong> and <strong>Velor Minor</strong> were among the earliest to fall. Thraxus relied on its vast military fleets, believing numbers would secure victory. We dismantled them in orbit before their forces could even organize. Velor Minor attempted diplomacy, offering alliances and resources in exchange for autonomy. They misunderstood our purpose.</span><span>We did not come to negotiate.</span><span>We came to establish order.</span><span>Both worlds now stand as the foundation of our early expansion—proof that whether through force or illusion, all resistance leads to the same end.</span></p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <img src={img2} alt="Worlds Brought to Order" loading="lazy" decoding="async" />
                <h2>Worlds Brought to Order</h2>
                <p><span>Not every conquest required annihilation. Some required correction.</span><span>The planet <strong>Arlath IX</strong> was consumed by internal war—its nations locked in endless conflict, its people fractured beyond repair. We intervened, not as invaders, but as the final authority they lacked. Within a single cycle, their governments were dismantled, their leaders replaced, and their chaos erased.</span><span>Similarly, <strong>Nerathis</strong> possessed advanced technology but no unity. Their brilliance was wasted on division. Under Viltrumite rule, their systems were repurposed, their innovations redirected toward something greater.</span><span>These worlds did not fall.</span><span>They were improved.</span></p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <img src={img3} alt="The Cost of Defiance" loading="lazy" decoding="async" />
                <h2>The Cost of Defiance</h2>
                <p><span>Some worlds chose extinction.</span><span><strong>Korr-Vath</strong> believed its planetary shields made it untouchable. They hid behind their defenses, confident we would abandon the effort. We did not. We broke their shields through sustained assault, entered their atmosphere, and reduced their cities to silence.</span><span>Then there was <strong>Elyndra</strong>, a world that rallied its entire population against us. Every citizen became a soldier. Every structure became a weapon. They fought with unity—something rare among lesser species.</span><span>It did not save them.</span><span><strong>Elyndra</strong>\ burned for days before it vanished from the stars.</span><span>Their names endure only because we remember them.</span></p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <img src={img4} alt="The Reach of the Empire" loading="lazy" decoding="async" />
                <h2>The Reach of the Empire</h2>
                <p><span>Our dominion stretches across systems too numerous for lesser minds to comprehend.</span><span>From the industrial worlds of <strong>Dravok Station</strong>, where entire populations labor to sustain our expansion, to the resource-rich plains of <strong>Tal’Ruun</strong>, every conquest serves a purpose. Trade routes connect these systems, guarded and enforced by those who ensure absolute compliance.</span><span>There is no corner of our Empire that exists without intention.</span><span>Every world is placed. Every system is controlled.</span><span>There is no randomness in Viltrum.</span></p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <img src={img5} alt="Champions of Conquest" loading="lazy" decoding="async" />
                <h2>Champions of Conquest</h2>
                <p><span>Not every conquest required annihilation. Some required correction.</span><span>The planet <strong>Arlath IX</strong> was consumed by internal war—its nations locked in endless conflict, its people fractured beyond repair. We intervened, not as invaders, but as the final authority they lacked. Within a single cycle, their governments were dismantled, their leaders replaced, and their chaos erased.</span><span>Similarly, <strong>Nerathis</strong> possessed advanced technology but no unity. Their brilliance was wasted on division. Under Viltrumite rule, their systems were repurposed, their innovations redirected toward something greater.</span><span>These worlds did not fall.</span><span>They were improved.</span></p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <img src={img6} alt="A Universe Yet to Fall" loading="lazy" decoding="async" />
                <h2>A Universe Yet to Fall</h2>
                <p><span>Despite all that we have conquered, there are still worlds that remain untouched.</span><span>Systems like <strong>Xyron</strong> Reach and The Outer Coalition Sectors continue to delay the inevitable, clinging to fragile alliances and false hope. They believe distance will protect them. They believe time is on their side.</span><span>They are wrong.</span><span>Every world we have taken once believed the same.</span><span>And now they stand beneath our banner.</span></p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        </>
        );
}