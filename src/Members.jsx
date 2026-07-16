import { useState, useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import viltrumitesEscaping from "./assets/viltrumites-escaping.jpg"
import Header from "./Header";
import Thragg from "./Thragg";
import Kregg from "./Kregg";
import Anessa from "./Anessa";
import Lucan from "./Lucan";
import Conquest from "./Conquest";
import Thula from "./Thula";
import Argall from "./Argall";
import Nolan from "./Nolan";
import Kradd from "./Kradd";
import Vidor from "./Vidor";
import Elix from "./Elix";
import Executioners from "./Executioners";
import argallPropic from "./assets/argall-propic.jpg"
import argallImg1 from "./assets/argall-img-1.webp"
import argallImg2 from "./assets/argall-img-2.jpg"
import argallImg3 from "./assets/argall-img-3.jpg"
import thraggPropic from "./assets/thragg-propic.jpg"
import thraggImg1 from "./assets/thragg-img-1.jpg"
import thraggImg2 from "./assets/thragg-img-2.jpg"
import thraggImg3 from "./assets/thragg-img-3.jpg"
import kreggPropic from "./assets/kregg-propic.jpg"
import kreggImg1 from "./assets/kregg-img-1.jpg"
import kreggImg2 from "./assets/kregg-img-2.jpg"
import kreggImg3 from "./assets/kregg-img-3.jpg"
import anessaPropic from "./assets/anessa-propic.jpg"
import anessaImg1 from "./assets/anessa-img-1.jpg"
import anessaImg2 from "./assets/anessa-img-2.jpg"
import anessaImg3 from "./assets/anessa-img-3.jpg"
import lucanPropic from "./assets/lucan-propic.jpg"
import lucanImg1 from "./assets/lucan-img-1.jpg"
import lucanImg2 from "./assets/lucan-img-2.jpg"
import lucanImg3 from "./assets/lucan-img-3.jpg"
import conquestPropic from "./assets/conquest-propic.jpg"
import conquestImg1 from "./assets/conquest-img-1.jpg"
import conquestImg2 from "./assets/conquest-img-2.jpg"
import conquestImg3 from "./assets/conquest-img-3.jpg"
import thulaPropic from "./assets/thula-propic.jpg"
import thulaImg1 from "./assets/thula-img-1.jpg"
import thulaImg2 from "./assets/thula-img-2.jpg"
import thulaImg3 from "./assets/thula-img-3.jpg"
import nolanPropic from "./assets/nolan-propic.jpg"
import nolanImg1 from "./assets/nolan-img-1.jpg"
import nolanImg2 from "./assets/nolan-img-2.jpg"
import nolanImg3 from "./assets/nolan-img-3.jpg"
import kraddPropic from "./assets/kradd-propic.jpg"
import kraddImg1 from "./assets/kradd-img-1.jpg"
import kraddImg2 from "./assets/kradd-img-2.jpg"
import kraddImg3 from "./assets/kradd-img-3.jpg"
import vidorPropic from "./assets/vidor-propic.jpg"
import vidorImg1 from "./assets/vidor-img-1.jpg"
import vidorImg2 from "./assets/vidor-img-2.jpg"
import vidorImg3 from "./assets/vidor-img-3.jpg"
import elixPropic from "./assets/elix-propic.jpg"
import elixImg1 from "./assets/elix-img-1.jpg"
import elixImg2 from "./assets/elix-img-2.jpg"
import elixImg3 from "./assets/elix-img-3.jpg"
import executionersPropic from "./assets/executioners-propic.jpg"
import executionersImg1 from "./assets/executioners-img-1.jpg"
import executionersImg2 from "./assets/executioners-img-2.jpg"
import executionersImg3 from "./assets/executioners-img-3.jpg"
import "./Members.css"
import Footer from './Footer'

export default function Members() {
    const argallParagraph = "Emperor Argall was not merely a ruler—he was the one who revealed what it meant to be Viltrumite. Before him, we possessed strength. Through him, we understood its purpose. He did not grant us power; he showed us how to wield it without hesitation, without weakness.";
    const thraggParagraph = "Thragg, the Grand Champion of the Viltrum Empire, embodies the pinnacle of our might. His unmatched combat prowess and strategic brilliance have made him a legend among our ranks. Thragg's victories in countless battles have solidified his status as a symbol of our strength and resilience.";
    const kreggParagraph = "Kregg, the relentless enforcer of the Viltrum Empire, is a force to be reckoned with. His unwavering loyalty and brutal efficiency in executing the empire's will have earned him a fearsome reputation. Kregg's presence on the battlefield strikes fear into the hearts of our enemies, making him an indispensable asset to our cause.";
    const anessaParagraph = "Anessa, the fierce warrior of the Viltrum Empire, is a testament to our strength and determination. Her unparalleled combat skills and unwavering dedication to our cause have made her a formidable opponent. Anessa's unwavering resolve and unyielding spirit inspire all who fight alongside her, making her an invaluable member of our forces.";
    const lucanParagraph = "Lucan, the cunning strategist of the Viltrum Empire, is a master of warfare and deception. His brilliant mind and tactical genius have led to countless victories for our empire. Lucan's ability to outmaneuver our enemies and anticipate their moves has made him an invaluable asset to our military campaigns, solidifying his place among the elite members of our forces.";
    const conquestParagraph = "Conquest, the ruthless conqueror of the Viltrum Empire, is a symbol of our unyielding ambition and dominance. His insatiable thirst for power and relentless pursuit of victory have made him a feared figure among our enemies. Conquest's unwavering determination and strategic brilliance have led to the expansion of our empire, solidifying his status as one of our most formidable members.";
    const thulaParagraph = "Thula, the enigmatic assassin of the Viltrum Empire, is a shadowy figure whose lethal skills and unwavering loyalty have made her an invaluable asset to our cause. Her ability to strike swiftly and silently has earned her a fearsome reputation among our enemies. Thula's unwavering dedication to our empire and her unparalleled combat prowess make her a formidable force in our ranks.";
    const nolanParagraph = "Nolan, the relentless warrior of the Viltrum Empire, is a symbol of our unyielding strength and resilience. His unwavering dedication to our cause and his unparalleled combat skills have made him a formidable opponent. Nolan's unwavering resolve and unyielding spirit inspire all who fight alongside him, making him an invaluable member of our forces.";
    const kraddParagraph = "Kradd, the brutal enforcer of the Viltrum Empire, is a force to be reckoned with. His unwavering loyalty and ruthless efficiency in executing the empire's will have earned him a fearsome reputation. Kradd's presence on the battlefield strikes fear into the hearts of our enemies, making him an indispensable asset to our cause.";
    const vidorParagraph = "Vidor, the cunning tactician of the Viltrum Empire, is a master of strategy and deception. His brilliant mind and tactical genius have led to countless victories for our empire. Vidor's ability to outmaneuver our enemies and anticipate their moves has made him an invaluable asset to our military campaigns, solidifying his place among the elite members of our forces.";
    const elixParagraph = "Elix, the relentless warrior of the Viltrum Empire, is a symbol of our unyielding strength and resilience. His unwavering dedication to our cause and his unparalleled combat skills have made him a formidable opponent. Elix's unwavering resolve and unyielding spirit inspire all who fight alongside him, making him an invaluable member of our forces.";
    const executionersParagraph = "The Executioners, the elite enforcers of the Viltrum Empire, are a force to be reckoned with. Their unwavering loyalty and ruthless efficiency in executing the empire's will have earned them a fearsome reputation. The Executioners' presence on the battlefield strikes fear into the hearts of our enemies, making them an indispensable asset to our cause.";

    // Each member's card component + modal images/copy live in one place instead of
    // a separate useState slot and handleOpenX function per character.
    const members = [
      { key: "argall", name: "Emperor Argall", Card: Argall, propic: argallPropic, img1: argallImg1, img2: argallImg2, img3: argallImg3, paragraph: argallParagraph },
      { key: "thragg", name: "Grand Regent Thragg", Card: Thragg, propic: thraggPropic, img1: thraggImg1, img2: thraggImg2, img3: thraggImg3, paragraph: thraggParagraph },
      { key: "kregg", name: "General Kregg", Card: Kregg, propic: kreggPropic, img1: kreggImg1, img2: kreggImg2, img3: kreggImg3, paragraph: kreggParagraph },
      { key: "anessa", name: "Anessa", Card: Anessa, propic: anessaPropic, img1: anessaImg1, img2: anessaImg2, img3: anessaImg3, paragraph: anessaParagraph },
      { key: "conquest", name: "Conquest", Card: Conquest, propic: conquestPropic, img1: conquestImg1, img2: conquestImg2, img3: conquestImg3, paragraph: conquestParagraph },
      { key: "thula", name: "Thula", Card: Thula, propic: thulaPropic, img1: thulaImg1, img2: thulaImg2, img3: thulaImg3, paragraph: thulaParagraph },
      { key: "lucan", name: "Lucan", Card: Lucan, propic: lucanPropic, img1: lucanImg1, img2: lucanImg2, img3: lucanImg3, paragraph: lucanParagraph },
      { key: "nolan", name: "Nolan", Card: Nolan, propic: nolanPropic, img1: nolanImg1, img2: nolanImg2, img3: nolanImg3, paragraph: nolanParagraph },
      { key: "kradd", name: "Kradd", Card: Kradd, propic: kraddPropic, img1: kraddImg1, img2: kraddImg2, img3: kraddImg3, paragraph: kraddParagraph },
      { key: "vidor", name: "Vidor", Card: Vidor, propic: vidorPropic, img1: vidorImg1, img2: vidorImg2, img3: vidorImg3, paragraph: vidorParagraph },
      { key: "elix", name: "Elix", Card: Elix, propic: elixPropic, img1: elixImg1, img2: elixImg2, img3: elixImg3, paragraph: elixParagraph },
      { key: "executioners", name: "The Executioners", Card: Executioners, propic: executionersPropic, img1: executionersImg1, img2: executionersImg2, img3: executionersImg3, paragraph: executionersParagraph },
    ];

    const [selectedMember, setSelectedMember] = useState(null);
    const showCard = selectedMember !== null;

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
    return (
        <>
          <Header />
            <div className="members-hero">
              <img src={viltrumitesEscaping} alt="Viltrumites Escaping" />

              <div className="members-overlay">
                <h1 className="members-title">MEMBERS</h1>
                <p className="members-subtitle">Elite forces of the Viltrum Empire</p>
              </div>
            </div>
            <p className="members-intro">Each Viltrumite is forged through conquest, defined by strength, and bound by purpose.</p>
            <div className="members-section">
          <div className="members-content-line"></div>
          <div className="overlay" style={{ display: showCard ? "block" : "none" }} onClick={() => setSelectedMember(null)}>
          <div className="clicked-card" style={{ display: showCard ? "flex" : "none" }} onClick={(e) => e.stopPropagation()}>
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={selectedMember?.propic} alt="Propic" /></div>
                <div className="swiper-slide"><img src={selectedMember?.img1} alt="Image One" /></div>
                <div className="swiper-slide"><img src={selectedMember?.img2} alt="Image Two" /></div>
                <div className="swiper-slide"><img src={selectedMember?.img3} alt="Image Three" /></div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <h2 className="member-name">{selectedMember?.name}</h2>
            <p>{selectedMember?.paragraph}</p>
          </div>
          </div>
          <div className="members-grid">
              {members.map((member) => (
                <member.Card key={member.key} onClick={() => setSelectedMember(member)} />
              ))}
              </div>
          </div>
          <Footer />
        </>
    );
}