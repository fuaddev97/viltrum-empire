import { useState, useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import geneticsWallpaper from "./assets/genetics-wp.jpg";
import Header from "./Header";
import "./Genetics.css";

export default function Genetics () {
    return(
       <>
        <Header />
        <div className="genetics-heading">
            <img src={geneticsWallpaper} alt="" className="genetics-wallpaper" />
            <div className="genetics-overlay">
                <h1 className="genetics-quote">VILTRUM GENETICS<br /></h1>
                <p>The future of the Viltrumite race lies in the hands of those who understand their destiny.</p>
            </div>
        </div>
        <div className="genetics-intro">
             <p> Viltrumite biology is not an accident of evolution. It is refinement through survival. Every weakness was removed. Every limitation erased. What remains is the dominant lifeform of the known universe.</p>
        </div>
        <div className="genetics-grid">
            <div className="trait-card">
              <h3>Superhuman Strength</h3>
              <p>Capable of planetary-level destruction through raw force alone.</p>
            </div>

            <div className="trait-card">
              <h3>Near Immortality</h3>
              <p>Aging slows drastically. A Viltrumite’s prime lasts for centuries.</p>
            </div>

            <div className="trait-card">
              <h3>Accelerated Healing</h3>
               <p>Severe injuries recover rapidly, provided vital organs remain intact.</p>
            </div>

            <div className="trait-card">
              <h3>Flight</h3>
              <p>Self-propelled movement through space without technological aid.</p>
            </div>

            <div className="trait-card">
              <h3>Adaptive Evolution</h3>
              <p>Combat strengthens the body. Survival refines the species.</p>
            </div>

            <div className="trait-card">
              <h3>Hybrid Dominance</h3>
              <p>Viltrumite DNA overrides most species, preserving purity.</p>
            </div>
        </div>
        <div className="dna-section">
          <div className="dna-text">
           <h2>Genetic Supremacy</h2>
           <p>Viltrumite DNA does not dilute—it dominates. Crossbreeds inherit nearly full Viltrumite capability, ensuring expansion without compromise.</p>
          </div >
        </div>
        <div className="weakness-section">
          <h2>Identified Limitations</h2>
          <ul>
            <li>Inner ear equilibrium disruption (extreme frequencies)</li>
            <li>Requires oxygen (though survivable in vacuum briefly)</li>
            <li>Massive internal trauma can still result in death</li>
          </ul>
        </div>
        <div className="genetics-final">
          <p>This is not evolution. This is inevitability. The universe does not shape us— we shape what survives within it.</p>
        </div>
       </>
    );
}